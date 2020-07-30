declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'test' | 'production'
      HOST: string
      PORT: number
    }
  }
}

export {}
