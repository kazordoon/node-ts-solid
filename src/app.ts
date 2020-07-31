import express from 'express'
import routes from './routes'

class App {
  public express: express.Application;

  constructor () {
    this.express = express()

    this.loadSettings()
    this.loadMiddlewares()
    this.loadRoutes()
  }

  private loadSettings () {
    this.express.set('HOST', process.env.HOST || 'localhost')
    this.express.set('PORT', process.env.PORT || 3333)
  }

  private loadMiddlewares () {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
  }

  private loadRoutes () {
    this.express.use(routes)
  }
}

export default new App().express
