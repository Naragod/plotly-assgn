import { CreateUserInput } from './create-user.input';
import { PartialType } from '@nestjs/mapped-types';
import { ObjectType, InputType, Field } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@ObjectType()
@InputType()
@Entity()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  id: string;
}
