import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';

/**
 * # AppModule
 *
 * - configurations for the application.
 */
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      disableHealthCheck: true,
      driver: ApolloDriver,
      sortSchema: true,
    }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders, ...userProviders],
})
export class AppModule {}
