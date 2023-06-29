import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { testProduct1 } from '../../test/entities/productTestEntities';

describe('ProductService', () => {
  let service: ProductService;
  const productRepositoryMock = {
    save: jest.fn(),
    findOne: jest.fn(),
    find: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useValue: productRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create product', async () => {
    jest
      .spyOn(productRepositoryMock, 'save')
      .mockImplementation((input) => input);
    let result = await service.create(testProduct1);
    expect(result).toEqual(testProduct1);
  });
});
