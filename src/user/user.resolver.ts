import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation((returns) => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.userService.create(createUserInput);
  }

  @Query((returns) => [User])
  async getAllUsers() {
    return await this.userService.findAll();
  }

  @Query((returns) => User)
  async getUser(@Args('id') id: string) {
    return await this.userService.findOne(id);
  }
}
