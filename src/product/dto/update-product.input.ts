import { CreateProductInput } from './create-product.input';
import { PartialType } from '@nestjs/mapped-types';
import { ObjectType, InputType, Field } from "@nestjs/graphql";
import { Entity } from "typeorm";

@ObjectType()
@InputType()
@Entity()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field()
  id: string;
}
