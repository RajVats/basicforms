import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from 'src/app/customers/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm!: FormGroup;
  countries: any[] = [];
  regions: Set<string> = new Set();

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    public dialogRef: MatDialogRef<CustomerFormComponent>
  ) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      region: ['', Validators.required],
      country: ['', Validators.required]
    });

    this.customerService.getCountries().subscribe((data: any) => {
      this.countries = data;
      console.log(this.countries);
      data.forEach((country: any) => this.regions.add(country.region));
    });
  }

  onRegionChange(): void {
    const countryControl = this.customerForm.get('country');
    if (countryControl) {
      countryControl.reset();
    }
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      this.customerService.addCustomer(this.customerForm.value);
      console.log('Form Submitted', this.customerForm.value);
      this.customerForm.reset();
    }
  }
}
