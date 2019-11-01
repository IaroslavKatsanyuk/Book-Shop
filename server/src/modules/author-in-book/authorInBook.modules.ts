import { Module } from "@nestjs/common";
import { CoreModule } from "../core/core.module";
import { AuthorInBookService } from "./authorInBook.service";
import { AuthorInBookController } from "src/controllers/authorInBook.controller";
import { authorInBookProviders } from "src/repositories/authorInBook.repository";
import { authorProviders } from "src/repositories/author.repository";
import { printingProviders } from "src/repositories/printingEditions.repository";

@Module ({
    imports: [CoreModule],
    providers: [AuthorInBookService, ...authorInBookProviders, ...authorProviders, ...printingProviders],
    exports: [AuthorInBookService],
    controllers: [AuthorInBookController],
})

export class AuthorInBookModule {}