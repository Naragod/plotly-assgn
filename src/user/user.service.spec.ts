import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ProductService } from '../product/product.service';
import { testProduct1 } from '../../test/entities/productTestEntities';
import {
  testUser1,
  testUserInput1,
} from '../../test/entities/userTestEntities';

describe('UserService', () => {
  let service: UserService;

  const userRepositoryMock = {
    save: jest.fn(),
    findOne: jest.fn(),
    find: jest.fn(),
  };

  let productServiceMock = {
    create: jest.fn(),
    findOne: jest.fn(),
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: userRepositoryMock },
        { provide: ProductService, useValue: productServiceMock },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create new user', async () => {
    jest
      .spyOn(userRepositoryMock, 'save')
      .mockImplementation((_input) => testUser1);
    jest
      .spyOn(productServiceMock, 'findAll')
      .mockImplementation(() => [testProduct1]);

    let result = await service.create(testUserInput1);
    expect(result).toEqual(testUser1);
    expect(productServiceMock.findAll.mock.calls.length).toBe(1);
  });
});
