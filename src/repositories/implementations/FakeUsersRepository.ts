import UsersRepositoryContract from '@repositories/UsersRepositoryContract'
import User from '@entities/User'

class FakeUsersRepository implements UsersRepositoryContract {
  private users: User[] = [];

  public async findByEmail (email: string) {
    const foundUser = this.users.find((user) => user.email === email)

    if (foundUser) {
      return foundUser
    }

    return null
  }

  public async save (user: User) {
    this.users.push(user)
  }
}

export default FakeUsersRepository
