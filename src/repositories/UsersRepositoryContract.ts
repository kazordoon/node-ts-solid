import User from '@entities/User'

interface UsersRepositoryContract {
  findByEmail(email: string): Promise<User|null>;
  save(user: User): Promise<void>;
}

export default UsersRepositoryContract
