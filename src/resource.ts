import * as qs from 'qs'

class ResourceError extends Error {
  errorInfo: any

  constructor(message: string, errorInfo: any) {
    super(message)
    this.errorInfo = errorInfo
  }
}

export type IdType = string | number
export type QueryType = any
export type DataType = { [key: string]: any }

export interface ExecuteOptions {
  url: string
  method?: 'get' | 'post' | 'delete' | 'put'
  body?: string
  headers?: { [key: string]: any }
}

export interface ResourceOptions {
  defaultQuery?: QueryType
}

export interface RuntimeOptions {
  status?: (status: RequestStatus) => any
  statusTo?: [any, string]
  queryParams?: QueryType
  throwErrors?: boolean
}

export interface RequestStatus {
  start?: boolean
  ready?: boolean
  busy?: boolean
  error?: any
}

export class Resource<T extends DataType> {
  resourceName: string
  basePath: string
  defaultQuery: QueryType

  static commonHeaders = { 'Content-Type': 'application/json' }

  constructor(resouceName: string, basePath: string, options?: ResourceOptions) {
    this.resourceName = resouceName
    this.basePath = basePath
    if (options) {
      this.defaultQuery = options.defaultQuery
    } else {
      this.defaultQuery = {}
    }
  }

  async query(options: QueryType, runtimeOptions: RuntimeOptions = {}): Promise<T[]> {
    let url = this._buildUrl(undefined, options)
    return this._execute({ url: url }, runtimeOptions)
  }

  async create(data: T, runtimeOptions: RuntimeOptions): Promise<T> {
    let queryParams = runtimeOptions.queryParams
    delete runtimeOptions.queryParams
    let url = this._buildUrl(undefined, queryParams)
    let body: DataType = {}
    data._ = '_'
    body[this.resourceName] = data
    return this._execute(
      {
        url: url,
        method: 'post',
        body: JSON.stringify(body),
        headers: Resource.commonHeaders,
      },
      runtimeOptions
    )
  }

  async update(id: IdType, data: T, runtimeOptions: RuntimeOptions = {}): Promise<T> {
    let queryParams = runtimeOptions['queryParams']
    delete runtimeOptions['queryParams']
    let url = this._buildUrl(`/${encodeURIComponent(String(id))}`, queryParams)
    let body: DataType = {}
    data._ = '_'
    body[this.resourceName] = data
    return this._execute(
      {
        url: url,
        method: 'put',
        body: JSON.stringify(body),
        headers: Resource.commonHeaders,
      },
      runtimeOptions
    )
  }

  async delete(id: IdType, runtimeOptions: RuntimeOptions = {}): Promise<any> {
    let queryParams = runtimeOptions.queryParams
    delete runtimeOptions.queryParams
    let url = this._buildUrl(`/${encodeURIComponent(String(id))}`, queryParams)
    return this._execute(
      {
        url: url,
        method: 'delete',
        headers: Resource.commonHeaders,
      },
      runtimeOptions
    )
  }

  async get(id: IdType, runtimeOptions: RuntimeOptions = {}): Promise<T> {
    let queryParams = runtimeOptions['queryParams']
    delete runtimeOptions['queryParams']
    let url = this._buildUrl(`/${encodeURIComponent(String(id))}`, queryParams)
    return this._execute(
      {
        url: url,
        headers: Resource.commonHeaders,
      },
      runtimeOptions
    )
  }

  async member_get(id: IdType, action: string, runtimeOptions: RuntimeOptions = {}): Promise<any> {
    let queryParams = runtimeOptions.queryParams
    delete runtimeOptions.queryParams
    let url = this._buildUrl(`/${encodeURIComponent(String(id))}/${action}`, queryParams)
    return this._execute(
      {
        url: url,
        headers: Resource.commonHeaders,
      },
      runtimeOptions
    )
  }

  async member_post(id: IdType, action: string, data: DataType, runtimeOptions: RuntimeOptions = {}): Promise<any> {
    let queryParams = runtimeOptions.queryParams
    delete runtimeOptions.queryParams
    let url = this._buildUrl(`/${encodeURIComponent(String(id))}/${action}`, queryParams)
    return this._execute(
      {
        url: url,
        method: 'post',
        body: JSON.stringify(data),
        headers: Resource.commonHeaders,
      },
      runtimeOptions
    )
  }

  async _execute(options: ExecuteOptions, runtimeOptions: RuntimeOptions = {}) {
    this._signalStatus({ start: true, busy: true }, runtimeOptions)
    let result = await fetch(options.url, options)
    return this._handleResult(result, runtimeOptions)
  }

  private _signalStatus(status: RequestStatus, runtimeOptions: RuntimeOptions = {}) {
    let statusFunction = runtimeOptions.status
    if (runtimeOptions.statusTo) {
      statusFunction = (s: RequestStatus) => {
        runtimeOptions.statusTo![0][runtimeOptions.statusTo![1]] = s
      }
    }
    if (statusFunction) {
      statusFunction(status)
    }
  }

  private _buildUrl(relative?: string, options?: QueryType) {
    options = Object.assign({}, this.defaultQuery, options)
    let url = this.basePath
    if (relative) {
      url += relative
    }
    if (options) {
      url += '?' + qs.stringify(options)
    }
    return url
  }

  private async _handleResult(result: Response, runtimeOptions: RuntimeOptions = {}) {
    if (result.ok) {
      try {
        let data = await result.json()
        this._signalStatus({ ready: true, busy: false }, runtimeOptions)
        return data
      } catch (e) {
        this._signalStatus({ ready: true, busy: false }, runtimeOptions)
        return null
      }
    } else {
      let errorInfo = {
        status: result.status,
        statusText: result.statusText,
        body: null,
      }

      try {
        errorInfo.body = await result.json()
      } catch (e) {
        errorInfo.body = null
      }

      this._signalStatus({ error: errorInfo, busy: false }, runtimeOptions)

      if (runtimeOptions.throwErrors) {
        throw new ResourceError('request failed', errorInfo)
      }
    }
  }
}
