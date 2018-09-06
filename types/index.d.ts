// import './ext'

interface RegisterOptions {
  resourceName?: string
}

export interface ResourceCollection {
  register(name: string, path: string, options?: RegisterOptions): void
}

declare const install: () => void

export default install
