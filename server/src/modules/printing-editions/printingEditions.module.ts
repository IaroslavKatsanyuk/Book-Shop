import { Module } from '@nestjs/common';
import { PrintingEditionsService } from './printingEditions.service';
import { printingProviders } from 'src/repositories/printingEditions.repository';
import { PrintingEditionsController } from 'src/controllers/printingEditions.controller';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [CoreModule],
  providers: [PrintingEditionsService, ...printingProviders],
  exports: [PrintingEditionsService],
  controllers: [PrintingEditionsController],
})
export class PrintingEditionsModule { }