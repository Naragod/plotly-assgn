import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { UpsertProductInput } from './dto/create-product.input';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation((_returns) => Product)
  async upsertProduct(@Args('createProductInput') product: UpsertProductInput) {
    return await this.productService.create(product);
  }

  @Query((_returns) => [Product])
  async getAllProducts() {
    return await this.productService.findAll();
  }

  @Query((_returns) => Product)
  async getProduct(@Args('id') id: string) {
    return await this.productService.findOne(id);
  }
}
