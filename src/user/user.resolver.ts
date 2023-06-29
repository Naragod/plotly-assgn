import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UpsertUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation((_returns) => User)
  async upsertUser(@Args('createUserInput') createUserInput: UpsertUserInput) {
    return await this.userService.create(createUserInput);
  }

  @Query((_returns) => [User])
  async getAllUsers() {
    return await this.userService.findAll();
  }

  @Query((_returns) => User)
  async getUser(@Args('id') id: string) {
    return await this.userService.findOne(id);
  }
}
