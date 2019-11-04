import { Module } from "@nestjs/common";
import { CoreModule } from 'src/modules/core/core.module';
import { AuthorService } from 'src/modules/author/author.service';
import { authorProviders } from 'src/repositories/author.repository';
import { AuthorController } from 'src/controllers/author.controller';
@Module ({
    imports: [CoreModule],
    providers: [AuthorService, ...authorProviders],
    exports: [AuthorService],
    controllers: [AuthorController],
})

export class AuthorModule {}