import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  customers$: Observable<any[]> = this.customersSubject.asObservable();
  private apiUrl = 'https://api.first.org/data/v1/countries';

  constructor(private http: HttpClient) { }

  addCustomer(customer: any): void {
    const currentCustomers = this.customersSubject.value;
    this.customersSubject.next([...currentCustomers, customer]);
  }

  getCustomers(): Observable<any[]> {
    return this.customers$;
  }


  getCountries(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => {
        const countriesArray = [];
        for (const code in response.data) {
          if (response.data.hasOwnProperty(code)) {
            countriesArray.push({
              code,
              country: response.data[code].country,
              region: response.data[code].region
            });
          }
        }
        return countriesArray;
      })
    );
  }
}
