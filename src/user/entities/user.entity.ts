import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class User extends Document {
  @Field(() => String, { description: 'ID', name: 'id' })
  id: string;

  @Field(() => String, { description: 'First Name' })
  firstName: string;

  @Field(() => String, { description: 'Last Name' })
  lastName: string;

  @Field(() => String, { description: 'Email' })
  email: string;
}
