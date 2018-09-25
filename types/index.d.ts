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

export class Resource<T> {
  constructor(resouceName: string, basePath: string, options?: ResourceOptions)

  query(options: { [key: string]: string }, runtimeOptions: RuntimeOptions): Promise<T[]>
  create(data: T, runtimeOptions: RuntimeOptions): Promise<T>
  update(id: string, data: T, runtimeOptions: RuntimeOptions): Promise<T>
  delete(id: string, runtimeOptions: RuntimeOptions): Promise<void>
  get(id: string, runtimeOptions: RuntimeOptions): Promise<T>
  member_get(id: string, action: string, runtimeOptions: RuntimeOptions): Promise<any>
  member_post(id: string, action: string, data: { [key: string]: any }, runtimeOptions: RuntimeOptions): Promise<any>
}

export interface Collection<T> extends Element {
  get(id: number): Promise<T>
  create(data: T): Promise<T>
  update(id: number, data: T): Promise<T>
  delete(id: number): Promise<void>
  refresh(): Promise<void>
  member_get(id: string, action: string): Promise<any>
  member_post(id: string, action: string, data: { [key: string]: any }): Promise<any>
}

export interface Model<T> extends Element {
  refresh(): Promise<void>
  update(data: T): Promise<void>
  delete(): Promise<void>
}

declare const install: () => void

export default install
