import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation((returns) => Product)
  async createProduct(@Args('createProductInput') product: CreateProductInput) {
    return await this.productService.create(product);
  }

  @Query((returns) => [Product])
  getAllProducts() {
    return this.productService.findAll();
  }

  @Query((returns) => Product)
  getProduct(@Args('id') id: string) {
    return this.productService.findOne(id);
  }
}
