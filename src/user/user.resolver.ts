import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(returns => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    const {id, email, name, age} = createUserInput;
    return await this.userService.create({id, name, email, age, orders: []});
  }

  @Query(returns => [User])
  async getAllUsers() {
    return await this.userService.findAll();
  }

  @Query(returns => User)
  async getUser(@Args('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Mutation(returns => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }
}
