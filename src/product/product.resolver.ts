import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(returns => Product)
  async createProduct(@Args('product') product: CreateProductInput) {
    let result = await this.productService.create(product);
    return this.getProduct(result)
  }

  @Query(returns => [Product])
  getAllProducts() {
    return this.productService.findAll();
  }

  @Query(returns => Product)
  getProduct(@Args('id') id: string) {
    return this.productService.findOne(id);
  }

  @Mutation(returns => Product)
  updateProduct(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation(returns => String)
  removeProduct(@Args('id') id: string) {
    return this.productService.remove(id);
  }
}
