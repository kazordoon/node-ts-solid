import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'

const routes = Router()

routes.post('/users', (req, res) => createUserController.handle(req, res))

export default routes
