import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private readonly productService: ProductService,
  ) {}

  async create(userInput: CreateUserInput) {
    let { id, name, email, age, orderIds } = userInput;
    const allProducts = await this.productService.findAll();
    let orders = allProducts.filter((product) => orderIds.includes(product.id));

    return await this.userRepo.save({ id, name, email, age, orders });
  }

  async findAll() {
    return await this.userRepo.find({
      relations: {
        orders: true,
      },
    });
  }

  async findOne(id: string): Promise<User> {
    let result = await this.userRepo.find({
      relations: { orders: true },
      where: { id },
    });
    return result.shift();
  }
}
