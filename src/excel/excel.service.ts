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
    data.date = moment(data.date).format('DD/MM/YYYY')
    console.log(data.date)
    data.total = parseFloat(data.total).toFixed(2);
    data.cgst = parseFloat(data.cgst).toFixed(2);
    data.sgst = parseFloat(data.sgst).toFixed(2);
    data.subTotal = parseFloat(data.subTotal).toFixed(2);
    data.rate = parseFloat(data.rate).toFixed(2);
    let GSTNo

    if(data.firmName === "MARUTI CREATION"){
      GSTNo = "24A XGPD 1587 N1 Z8"
    }else if(data.firmName === "GOPI ART"){
      GSTNo = "24B NCPC 6034 CI ZB"
    }else if(data.firmName === "DIYA FASHION"){
      GSTNo = "24A LTPS 6772 L2 ZZ"
    }else if(data.firmName === "MEET THREAD"){
      GSTNo = "24A MAPD 5674 K1 Z2"
    }else if(data.firmName === "RADHE KRISHNA CREATION"){
      GSTNo = "24A THPM 8638 E2 Z1"
    }else if(data.firmName === "MOMAYA CREATION"){
      GSTNo = "24A OJPB 0057 R1 ZU"
    }else if(data.firmName === "SHREE HANUMANT CREATION"){
      GSTNo = "24B FQPD 0884 P1 ZW"
    }else if(data.firmName === "JAI MAHALAXMI TEXTILES"){
      GSTNo = "24A TUPG 0842 K1 ZH"
    }else if(data.firmName === "MAHALAXMI ART"){
      GSTNo = "24A EJPN 1096 E1 ZL"
    }else if(data.firmName === "KRISHNA FASHION"){
      GSTNo = "24A PGPA 2160 J1 ZC"
    }else if(data.firmName === "JAY AMBE JARI"){
      GSTNo = "24B FQPD 0670 H1 ZL"
    }else if(data.firmName === "UGAM CREATION"){
      GSTNo = "24A OKPG 6967 L1 ZD"
    }else if(data.firmName === "RADHE KRISHNA FASHION"){
      GSTNo = "24A HHPC 5829 M1 Z6"
    }else if(data.firmName === "MAHAVIR ART"){
      GSTNo = "24A RZPD 1195 P1 Z1"
    }else if(data.firmName === "DM TEXTILE"){
      GSTNo = "24D HRPM 3900 A1 Z0"
    }else if(data.firmName === "R.R TEXTILE"){
      GSTNo = "24A EKPN 9502 R1 ZS"
    }else if(data.firmName === "RAJ THREAD AND JARI"){
      GSTNo = "24A UZPK 4001 A1 Z0"
    }else if(data.firmName === "MIRA FASHION"){
      GSTNo = "24B BAPR 2487 L1 ZB"
    }else if(data.firmName === "SHYAM ART"){
      GSTNo = "24A VZPS 5218 C1 Z9"
    }else if(data.firmName === "SAGAR FASHION"){
      GSTNo = "24A DZPS 8514 PI ZE"
    }else if(data.firmName === "RIYA FASHION"){
      GSTNo = "24B UQPS 0854 M1 ZY"
    }else if(data.firmName === "ANSHIKA TRADERS"){
      GSTNo = "24D BLPP 7003 M1 ZC"
    }else if(data.firmName === "JIYA THREAD & JARI"){
      GSTNo = "24E MKPK 0935 G1Z4"
    }else if(data.firmName === "SHLOK CREATION"){
      GSTNo = "24B RVPS 7746 Z1 Z3"
    }else if(data.firmName === "BAPASITARAM ENTERPRISE"){
      GSTNo = "24D BJPP 1000 C1 ZE"
    }else if(data.firmName === "SAI FASHION"){
      GSTNo = "24A XAPM 6140 Q1 Z8"
    }

    //@ts-ignore
    const gstInPer = parseFloat((data.gst) / 2).toFixed(2)
    const totalWords=  converter.toWords(data.total)
    const word = Number(data.cgst) + Number(data.sgst)
    const gstWords = converter.toWords(word)

    return this.pdfService.generatePDF('/invoice.ejs', { data,GSTNo,totalWords,gstWords,gstInPer }, 'invoice');
  }
}
