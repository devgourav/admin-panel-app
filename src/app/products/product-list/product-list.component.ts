import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { ProductsModule } from '../products.module';

export interface ProductList {
  name: string;
  manufacturer: string;
  totalStock: number;
  HSNCode: string;
  batchNo: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public gridApi: any;
  public gridColumnApi: any;

  totalProductData = {
    heading: 'Total Products',
    value: 100
  };

  outOfStockData = {
    heading: 'Out of Stock',
    value: 2
  };

  expiredData = {
    heading: 'Expired Products',
    value: 4
  };

  columnDefs = [
    { field: 'name', sortable: true },
    { field: 'manufacturer', sortable: true },
    { field: 'totalStock', sortable: true },
    { field: 'HSNCode', sortable: true },
    { field: 'batchNo', sortable: true }
  ];

  productList: ProductList[] = [
    {
      name: 'Paracetamol',
      manufacturer: 'Pfizer',
      totalStock: 300,
      HSNCode: 'BNE12345',
      batchNo: 'BT2343'
    },
    {
      name: 'Paracetamol',
      manufacturer: 'Pfizer',
      totalStock: 300,
      HSNCode: 'BNE12345',
      batchNo: 'BT2343'
    },
    {
      name: 'Paracetamol',
      manufacturer: 'Pfizer',
      totalStock: 300,
      HSNCode: 'BNE12345',
      batchNo: 'BT2343'
    },
    {
      name: 'Paracetamol',
      manufacturer: 'Pfizer',
      totalStock: 300,
      HSNCode: 'BNE12345',
      batchNo: 'BT2343'
    },
    {
      name: 'Paracetamol',
      manufacturer: 'Pfizer',
      totalStock: 300,
      HSNCode: 'BNE12345',
      batchNo: 'BT2343'
    }
  ];

  rowData = of(this.productList);

  constructor(private http: HttpClient) {}

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    // params.api.setRowData(this.dataSets);
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });
  }

  ngOnInit(): void {}
}
