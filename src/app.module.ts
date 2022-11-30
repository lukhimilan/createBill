import { Module } from '@nestjs/common';
import { PDFModule } from './pdf/pdf.module';
import path from 'path';
import { ExcelModule } from './excel/excel.module';

const pdfTemplatePath = path.join(__dirname, './assets/pdf');

@Module({
  imports: [
    PDFModule.register({
      templatePath: pdfTemplatePath,
    }),
    ExcelModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
