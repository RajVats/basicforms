import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSelectModule } from 'ngx-select-ex';
import { PinFormComponent } from './pin-form/pin-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        CustomerFormComponent,
        PinFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatDialogModule,
        MatOptionModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        MatDialogModule,
        NgxSelectModule
    ],
    exports: [
        CustomerFormComponent,
        PinFormComponent
    ]
})
export class SharedModule { }
