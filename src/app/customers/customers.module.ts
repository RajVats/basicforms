import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CustomerListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
