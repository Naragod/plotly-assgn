import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation('createProduct')
  create(@Args('product') product: Product) {
    return this.productService.create(product);
  }

  @Query('product')
  findAll() {
    return this.productService.findAll();
  }

  @Query('product')
  findOne(@Args('id') id: string) {
    return this.productService.findOne(id);
  }

  @Mutation('updateProduct')
  update(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation('removeProduct')
  remove(@Args('id') id: string) {
    return this.productService.remove(id);
  }
}
