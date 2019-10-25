import { Module } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { AuthorController } from "src/controllers/author.controller";
import { authorProviders } from "src/repositories/author.repository";
import { CoreModule } from "../core/core.module";

@Module ({
    imports: [CoreModule],
    providers: [AuthorService, ...authorProviders],
    exports: [AuthorService],
    controllers: [AuthorController],
})

export class AuthorModule {}