import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../customer.service';
import { Customer } from '../customer';
import { Customers } from '../customers';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  customers: Customer[];
  // test : string;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }


  searchCustomer ( criteriaCustomer: String): any {
    console.log(criteriaCustomer);
    // this.customerService.searchCustomer(criteriaCustomer)
    // // .subscribe(result => this.customers = result);

    // .subscribe(
    //   // function(data){
    //   //   console.log("#### Response Data");
    //   //   console.log(data);
    //   //   this.customers = data;
    //   //   console.log(this.customers);
    //   // }, function(err){
    //   //   console.log("#### Error");
    //   //   console.log(err);
    //   // }
      
    //   (data) => {
    //     if(data[0] == undefined){
    //       console.log("## No search result return!");
    //       alert("No search result!");
    //     }else {
    //       this.customers = data;
    //       console.info("#### In component search customer success");
    //       console.log(data);
    //     }
    //   }
    //   );
      
      this.customerService.searchCustomer(criteriaCustomer).subscribe(customers => this.customers = customers);
      console.info("ddddddddd");
      return null;

      // this.test = "TTTTTTTTEST";
  }

}
