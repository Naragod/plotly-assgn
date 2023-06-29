import { testProduct1 } from './productTestEntities';

export const testUserInput1 = {
  id: 'id',
  name: 'name',
  email: 'email',
  age: 100,
  orderIds: ['ABCD'],
};
const { orderIds, ...userParams } = testUserInput1;
export const testUser1 = { orders: [testProduct1], ...userParams };
