import { Component, OnInit, Input } from '@angular/core';
import { CustomerService} from '../customer.service';

import { Customer } from '../customer';
import { CUSTOMERS } from '../mock-customers';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


const URL = 'http://localhost:56956/api/upload';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
closeResult: string;
  current: number = 0;
  recharge: number = 0;
  // customers = CUSTOMERS;
  @Input() customers: Customer[];
  @Input() customer : Customer;
  // @Input() test : string;

  constructor(private modalService: NgbModal , private customerService: CustomerService) { 
  }

  ngOnInit() {
  }

  updateCustomer ( customer: Customer): any {
    console.log("## In component update balance##");
    console.log(customer);
    console.log(this.recharge);
    this.customerService.updateCustomer(customer, this.recharge)
    .subscribe(
      (res) => {
        console.info("#### In component subscribe update balance success");
      }
      /*,
      (err) => {
        console.info("#### In component subscribe update balance failed");
      }*/
      
      );
  }

  openUpdateModel(content,customer:Customer) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      // to do update recharge function.
      this.updateRecharge(result);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  updateRecharge(customer:Customer){
    console.info("fffff in  update recharge");
    console.info(customer);
  }



  openUploadModel(contentUpload,customer:Customer) {

    this.modalService.open(contentUpload, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      // to do upload
      this.uploadCondition(result);

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  uploadCondition(result){
    console.info("in upload -----");
    console.info(result);
  }



  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

}
