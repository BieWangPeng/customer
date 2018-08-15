import { Injectable } from '@angular/core';
import { Http, Jsonp} from '@angular/http';
import { map, catchError, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Customer } from './customer';
import { Customers } from './customers';
import { CUSTOMERS } from './mock-customers';

// import 'rxjs/rx';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' });
// };

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  myHttpHead = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  constructor(private jsonp:Jsonp, private http: Http, private httpClient: HttpClient) { }

  searchCustomer ( criteriaCustomer: String) {
      console.info("### In searchCustomer()");
      // var url = `http://192.168.18.180:9998/customer/search?condition=${criteriaCustomer}`;
      // // const url = `${this.heroesUrl}/?id=${id}`;
      // return this.http.get(url).pipe(map(res=>res.json()));

      
      console.info(CUSTOMERS);
      return of(CUSTOMERS);
  }

  updateCustomer ( customer : Customer, recharge: number): any {
      console.info("In updateCustomer");
      console.info('Before update');
      console.info(customer);
      customer.balance = Number(customer.balance) + Number(recharge);
      // customer.vigilance = Number(customer.vigilance) + Number(5);
      console.info('After update');
      console.info(customer);
      var url = `http://192.168.18.180:9998/customer`;
      return this.httpClient.put(url, customer, this.myHttpHead).pipe();
  };

}
