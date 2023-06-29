import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { testUser1 } from '../../test/entities/userTestEntities';

describe('UserResolver', () => {
  let resolver: UserResolver;
  let userServiceMock = {
    findAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        { provide: UserService, useValue: userServiceMock },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('Resolve getAllUsers', async () => {
    jest
      .spyOn(userServiceMock, 'findAll')
      .mockImplementation(() => [testUser1]);

    let result = await resolver.getAllUsers();
    expect(result).toEqual([testUser1]);
  });
});
