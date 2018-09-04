import qs from 'qs'

class ResourceError extends Error {
  constructor(message, errorInfo) {
    super(message)
    this.errorInfo = errorInfo
  }
}

export default class Resource {
  static commonHeaders = { 'Content-Type': 'application/json' }

  constructor(resouceName, basePath, options) {
    this.resouceName = resouceName
    this.basePath = basePath
    if (options) {
      this.defaultQuery = options.defaultQuery
    } else {
      this.defaultQuery = {}
    }
  }

  async query(options, runtimeOptions) {
    let url = this._buildUrl(null, options)
    return this._execute({ url: url }, runtimeOptions)
  }

  async create(data, runtimeOptions) {
    let queryParams = runtimeOptions['queryParams']
    delete runtimeOptions['queryParams']
    let url = this._buildUrl(undefined, queryParams)
    let body = {}
    data._ = '_'
    body[this.resouceName] = data
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

  async update(id, data, runtimeOptions) {
    let queryParams = runtimeOptions['queryParams']
    delete runtimeOptions['queryParams']
    let url = this._buildUrl(`/${encodeURIComponent(id)}`, queryParams)
    let body = {}
    data._ = '_'
    body[this.resouceName] = data
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

  async delete(id, runtimeOptions) {
    let queryParams = runtimeOptions['queryParams']
    delete runtimeOptions['queryParams']
    let url = this._buildUrl(`/${encodeURIComponent(id)}`, queryParams)
    return this._execute(
      {
        url: url,
        method: 'delete',
        headers: Resource.commonHeaders,
      },
      runtimeOptions
    )
  }

  async get(id, runtimeOptions) {
    let queryParams = runtimeOptions['queryParams']
    delete runtimeOptions['queryParams']
    let url = this._buildUrl(`/${encodeURIComponent(id)}`, queryParams)
    return this._execute(
      {
        url: url,
        headers: Resource.commonHeaders,
      },
      runtimeOptions
    )
  }

  async member_get(id, action, runtimeOptions) {
    let url = this._buildUrl(`/${encodeURIComponent(id)}/${action}`)
    return this._execute(
      {
        url: url,
        headers: Resource.commonHeaders,
      },
      runtimeOptions
    )
  }

  async _execute(options, runtimeOptions = {}) {
    this._signalStatus({ start: true, busy: true }, runtimeOptions)
    let result = await fetch(options.url, options)
    return this._handleResult(result, runtimeOptions)
  }

  _signalStatus(status, runtimeOptions) {
    let statusFunction = runtimeOptions.status
    if (runtimeOptions.statusTo) {
      statusFunction = (s) => {
        runtimeOptions.statusTo[0][runtimeOptions.statusTo[1]] = s
      }
    }
    if (statusFunction) {
      statusFunction(status)
    }
  }

  _buildUrl(relative, options) {
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

  async _handleResult(result, runtimeOptions) {
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
