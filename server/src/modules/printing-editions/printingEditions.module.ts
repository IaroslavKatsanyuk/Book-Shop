import { Module } from '@nestjs/common';
import { CoreModule } from 'src/modules/core/core.module';
import { PrintingEditionsService } from 'src/modules/printing-editions/printingEditions.service';
import { printingProviders } from 'src/repositories/printingEditions.repository';
import { PrintingEditionsController } from 'src/controllers/printingEditions.controller';

@Module({
  imports: [CoreModule],
  providers: [PrintingEditionsService, ...printingProviders],
  exports: [PrintingEditionsService],
  controllers: [PrintingEditionsController],
})
export class PrintingEditionsModule { }