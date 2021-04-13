export interface Product {
  id: string;
  name: string;
  manufacturer: string;
  description: string;
  totalStock: number;
  packType: string;
  HSNCode: string;
  marketedBy: string;
  creationDate: Date;
  modificationDate: Date;
  sellingAmount: number;
  buyingAmount: number;
  cgst: number;
  sgst: number;
  marginAmount: number;
  batchNo: string;
}
