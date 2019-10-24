import { databaseProviders } from "src/repositories/connectionDatabase";
import { Module } from "@nestjs/common";

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders]
  })
  export class CoreModule { }
  