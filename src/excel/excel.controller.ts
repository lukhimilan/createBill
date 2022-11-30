import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import moment from 'moment';
import { CreateBillDTO } from './dto/billTypeDTO';
import { ExcelService } from './excel.service';

@Controller('api')
export class ExcelController {
  constructor(private excelService: ExcelService) {}

  @Post('/bill')
  async createBill(@Res() res: Response, @Body() data: CreateBillDTO) {
    //@ts-ignore
    const date = moment(data.date).format('DD-MM-YYYY')
    await this.excelService.createBill(data).then((pdf) => {
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=${data.firmName} (${date}).pdf`,
        'Content-Length': pdf.length,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: 0,
      });
      res.end(pdf);
    });
  }
}
