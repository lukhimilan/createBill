export class CreateBillDTO {
    firmName: string;
    customerName?: string;
    GSTNo?: string;
    date: Date;
    billNo: string;
    productName: string;
    code: string;
    qty: string;
    rate: string;
    gst: number;
    subTotal: string
    cgst: string;
    sgst: string;
    total: string;
    note: string;
  }