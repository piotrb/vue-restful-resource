// import './ext'

interface RegisterOptions {
  resourceName?: string
}

export interface ResourceCollection {
  register(name: string, path: string, options?: RegisterOptions): void
}

export interface ResourceOptions {
  defaultQuery?: { [key: string]: string }
}

export interface RuntimeOptions {
  queryParams?: { [key: string]: string }
  status?: (status: RequestStatus) => void
  statusTo?: [any, string]
  throwErrors?: boolean
}

export interface RequestStatus {
  ready: boolean
  busy: boolean
  error?: any
}

type IdType = number | string

export class Resource<T> {
  constructor(resouceName: string, basePath: string, options?: ResourceOptions)

  query(options: { [key: string]: string }, runtimeOptions: RuntimeOptions): Promise<T[]>
  create(data: T, runtimeOptions: RuntimeOptions): Promise<T>
  update(id: IdType, data: T, runtimeOptions: RuntimeOptions): Promise<T>
  delete(id: IdType, runtimeOptions: RuntimeOptions): Promise<void>
  get(id: IdType, runtimeOptions: RuntimeOptions): Promise<T>
  member_get(id: IdType, action: string, runtimeOptions: RuntimeOptions): Promise<any>
  member_post(id: IdType, action: string, data: { [key: string]: any }, runtimeOptions: RuntimeOptions): Promise<any>
}

export interface Collection<T> extends Element {
  get(id: IdType): Promise<T>
  create(data: T): Promise<T>
  update(id: IdType, data: T): Promise<T>
  delete(id: IdType): Promise<void>
  refresh(): Promise<void>
  member_get(id: IdType, action: string): Promise<any>
  member_post(id: IdType, action: string, data: { [key: string]: any }): Promise<any>
}

export interface Model<T> extends Element {
  refresh(): Promise<void>
  update(data: T): Promise<void>
  delete(): Promise<void>
}

declare const install: () => void

export default install
