import express from 'express'
import routes from './routes'

class App {
  public express: express.Application;

  constructor () {
    this.express = express()

    this.loadSettings()
    this.loadRoutes()
  }

  private loadSettings () {
    this.express.set('HOST', process.env.HOST || 'localhost')
    this.express.set('PORT', process.env.PORT || 3333)
  }

  private loadRoutes () {
    this.express.use(routes)
  }
}

export default new App().express
