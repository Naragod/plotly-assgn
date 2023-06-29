import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';
import { Product } from './product/entities/product.entity';
import { User } from './user/entities/user.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user/:userid')
  async getUserInfo(@Param('userid') userid): Promise<User> {
    let result = await this.userService.findOne(userid);
    console.log("Get User:", result)
    return result;
  }

  @Get('product/:productid')
  async getProductInfo(@Param('productid') productid): Promise<Product> {
    return await this.productService.findOne(productid);
  }

  @Post('product')
  async createProduct(@Body() body): Promise<string> {
    return await this.productService.create(body);
  }

  @Post('user')
  async createUser(@Body() body): Promise<User> {
    // let { id, name, email, age, orderIds } = body;
    // const allProducts = await this.productService.findAll();
    // let associatedProducts = allProducts.filter((product) =>
    //   orderIds.includes(product.id),
    // );

    // console.log("associatedProducts:", associatedProducts)

    // const user = {
    //   id,
    //   name,
    //   email,
    //   age,
    //   orders: associatedProducts,
    // };
    // let result = await this.userService.create(user);
    // console.log("Result User:", result);
    // return result;
    return <User>{}
  }
}
