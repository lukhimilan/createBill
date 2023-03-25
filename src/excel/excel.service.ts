import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { PDFService } from 'src/pdf/pdf.service';
import { CreateBillDTO } from './dto/billTypeDTO';
import converter from 'number-to-words';

const assetsFolderPath = '../assets';

@Injectable()
export class ExcelService {
  constructor(private pdfService: PDFService) {}

  async createBill(data: CreateBillDTO) {
    //@ts-ignore
    data.date = moment(data.date).format('DD/MM/YYYY');
    console.log(data.date);
    data.total = parseFloat(data.total).toFixed(2);
    data.cgst = parseFloat(data.cgst).toFixed(2);
    data.sgst = parseFloat(data.sgst).toFixed(2);
    data.subTotal = parseFloat(data.subTotal).toFixed(2);
    data.rate = parseFloat(data.rate).toFixed(2);
    let GSTNo;

    GSTNo = data.GSTNo;
    //@ts-ignore
    const gstInPer = parseFloat(data.gst / 2).toFixed(2);
    const totalWords = converter.toWords(data.total);
    const word = Number(data.cgst) + Number(data.sgst);
    const gstWords = converter.toWords(word);

    return this.pdfService.generatePDF(
      '/invoice.ejs',
      { data, GSTNo, totalWords, gstWords, gstInPer },
      'invoice',
    );
  }
}
