import UsersRepositoryContract from '@repositories/UsersRepositoryContract'
import User from '@entities/User'
import MailProviderContract from '@providers/MailProviderContract'

class CreateUserUseCase {
  constructor (
    private usersRepository: UsersRepositoryContract,
    private mailProvider: MailProviderContract
  ) {}

  async execute (data: CreateUserRequestDTOContract) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = new User(data)

    await this.usersRepository.save(user)

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        address: data.email
      },
      from: {
        name: 'Team',
        address: 'team@myapp.com'
      },
      subject: 'Welcome to our platform',
      body: '<p>You can already log in our platform</p>'
    })
  }
}

export default CreateUserUseCase
