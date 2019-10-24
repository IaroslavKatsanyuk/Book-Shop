import { Injectable, Inject } from '@nestjs/common';
import { PrintingEditionsEntity } from 'src/entities/printingEditions.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrintingEditionsService {
  constructor(
    @Inject('PrintingRepository')
    private readonly printingRepository: Repository<PrintingEditionsEntity>,
  ) { }

  async validateRegistbook(printingEditionsModel: any): Promise<any> {
    const name = await this.printingRepository.findOne({ where: { name: printingEditionsModel.name } });
    if (name != undefined) {
      return name;
    }
    return null;
  }

    async printingeditions (printingEditionsModel: any){
        const validateBook = await this.validateRegistbook(printingEditionsModel);
    if (!validateBook) {
        const printingToRegister: PrintingEditionsEntity = new PrintingEditionsEntity();
        printingToRegister.name = printingEditionsModel.name;
        printingToRegister.description = printingEditionsModel.description;
        printingToRegister.price = printingEditionsModel.price;
        printingToRegister.isRemoved = printingEditionsModel.isRemoved;
        printingToRegister.status = printingEditionsModel.status;
        printingToRegister.currency = printingEditionsModel.currency;
        printingToRegister.type = printingEditionsModel.type;
        return this.printingRepository.insert(printingToRegister);
      }
      return null;
    }
}