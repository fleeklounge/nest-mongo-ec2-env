import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {DATASOURCE} from "./env";

@Module({
  imports: [MongooseModule.forRoot(DATASOURCE)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
