import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { UserService } from './user/user.service';
import { ProductService } from './product/product.service';
import { testUser1 } from '../test/entities/userTestEntities';
import { testProduct1 } from '../test/entities/productTestEntities';

describe('AppController', () => {
  let appController: AppController;

  let userServiceMock = {
    create: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn(),
  };

  let productServiceMock = {
    create: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        { provide: UserService, useValue: userServiceMock },
        { provide: ProductService, useValue: productServiceMock },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('user', () => {
    it('should return User object', async () => {
      jest
        .spyOn(userServiceMock, 'findOne')
        .mockImplementation((_id) => testUser1);
      let result = await appController.getUserInfo('1A');
      expect(result).toEqual(testUser1);
    });
  });

  describe('product', () => {
    it('should return Product object', async () => {
      jest
        .spyOn(productServiceMock, 'findOne')
        .mockImplementation((_id) => testProduct1);
      let result = await appController.getProductInfo('ABCD');
      expect(result).toEqual(testProduct1);
    });
  });
});
