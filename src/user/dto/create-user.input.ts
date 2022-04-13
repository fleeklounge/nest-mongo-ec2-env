import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'User First Name' })
  firstName: string;

  @Field(() => String, { description: 'User Last Name' })
  lastName: string;

  @Field(() => String, { description: 'User Email' })
  email: string;

  @Field(() => String, { description: 'User Password' })
  password: string;
}
