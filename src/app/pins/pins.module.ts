import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinsRoutingModule } from './pins-routing.module';
import { PinListComponent } from './pin-list/pin-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PinListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    PinsRoutingModule
  ]
})
export class PinsModule { }
