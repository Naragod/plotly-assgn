import { ObjectType, Field } from '@nestjs/graphql';
import { Product } from '../../product/entities/product.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  age: number;

  @Field((_type) => [Product])
  @ManyToMany(() => Product)
  @JoinTable()
  orders: Product[];
}
