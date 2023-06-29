
import { ObjectType, InputType, Field } from "@nestjs/graphql";
import { Entity } from "typeorm";

@ObjectType()
@InputType()
@Entity()
export class CreateProductInput {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  price: number;
}
