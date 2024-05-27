import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CustomerFormComponent } from 'src/app/shared/customer-form/customer-form.component';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent  implements OnInit{
  displayedColumns: string[] = ['name', 'email', 'region', 'country'];
  customers: any[] = [];

  ngOnInit(): void {
    this.custService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  constructor(private dialog: MatDialog, private custService: CustomerService) {}

  openCreateCustomerDialog(): void {
    const dialogRef = this.dialog.open(CustomerFormComponent);
  }
}
