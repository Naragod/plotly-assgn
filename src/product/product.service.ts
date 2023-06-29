import { Injectable } from '@nestjs/common';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async create(product: Product) {
    return await this.productRepo.save(product);
  }

  async findAll() {
    return await this.productRepo.find();
  }

  async findOne(id: string) {
    return await this.productRepo.findOneBy({ id });
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }
}
