import { Request, Response } from 'express'
import CreateUserUseCase from './CreateUserUseCase'

class CreateUserController {
  constructor (private createUserUseCase: CreateUserUseCase) {}

  async handle (req: Request, res: Response) {
    try {
      const { name, email, password } = req.body

      await this.createUserUseCase.execute({ name, email, password })

      await res.sendStatus(201)
    } catch (err) {
      console.error(err)
      const error = {
        message: 'Could not create the user.'
      }
      return res.status(422).json(error)
    }
  }
}

export default CreateUserController
