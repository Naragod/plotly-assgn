import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';
import { Product } from './product/entities/product.entity';
import { User } from './user/entities/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly productService: ProductService,
  ) {}

  @Get('users')
  async getAllUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get('user/:userid')
  async getUserInfo(@Param('userid') userid): Promise<User> {
    return await this.userService.findOne(userid);
  }

  @Get('products')
  async getAllProducts(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get('product/:productid')
  async getProductInfo(@Param('productid') productid): Promise<Product> {
    return await this.productService.findOne(productid);
  }

  @Post('product')
  async upsertProduct(@Body() body): Promise<Product> {
    return await this.productService.create(body);
  }

  @Post('user')
  async upsertUser(@Body() body): Promise<User> {
    return await this.userService.create(body);
  }
}
