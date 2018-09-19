// import './ext'

interface RegisterOptions {
  resourceName?: string
}

export interface ResourceCollection {
  register(name: string, path: string, options?: RegisterOptions): void
}

export interface Collection<T> extends Element {
  get(id: number): Promise<T>
  create(data: T): Promise<T>
  update(id: number, data: T): Promise<T>
  delete(id: number): Promise<void>
  refresh(): Promise<void>
}

export interface Model<T> extends Element {
  refresh(): Promise<void>
  update(data: T): Promise<void>
  delete(): Promise<void>
}

declare const install: () => void

export default install
