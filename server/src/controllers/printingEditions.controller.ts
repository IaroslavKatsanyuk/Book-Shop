import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PrintingEditionsModel } from 'src/models/printing-editions/printingEditions.model';
import { PrintingEditionsService } from '../modules/printing-editions/printingEditions.service';



@Controller()
export class PrintingEditionsController {
  constructor(
      private readonly printingEditionsService: PrintingEditionsService,
  ) {}
  @Post('printingeditions') 
  async printingeditions(@Body() printingEditionsModel: PrintingEditionsModel){
      return this.printingEditionsService.printingeditions(printingEditionsModel);
  }
}

 