import { ObjectType, InputType, Field } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@ObjectType()
@InputType()
@Entity()
export class UpsertUserInput {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  age: number;
  @Field((type) => [String])
  orderIds: string[];
}
