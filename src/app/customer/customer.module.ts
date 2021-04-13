import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromCustomer from './store';


@NgModule({
  declarations: [
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    StoreModule.forFeature(fromCustomer.customerFeatureKey, fromCustomer.reducers, { metaReducers: fromCustomer.metaReducers })
  ]
})
export class CustomerModule { }
