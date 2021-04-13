import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataCardComponent } from './data-card/data-card.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [SidebarComponent, DataCardComponent],
  imports: [CommonModule, SharedRoutingModule, AgGridModule.withComponents([])],
  exports: [SidebarComponent, DataCardComponent, AgGridModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
