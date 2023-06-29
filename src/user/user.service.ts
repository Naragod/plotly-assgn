import { Injectable } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(user: User) {
    return await this.userRepo.save(user);
  }

  async findAll() {
    return await this.userRepo.find({
      relations: {
        orders: true,
      },
    });
  }

  async findOne(id: string): Promise<User> {
    let result =  await this.userRepo.find({
      relations: { orders: true },
      where: { id },
    });
    return result.shift()
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }
}
