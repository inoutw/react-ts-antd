/// <reference types="react-scripts" />
declare type Func<T = {}> = (value?: T) => void

declare interface PageComponent<T> {}

declare interface Route {
  path: string
  name: string
  component: any
}

declare interface Module {
  name: string
  routes?: Route[]
}

declare type Api<P, R> = (p: P) => Promise<R>
