import { Injectable, EventEmitter } from '@angular/core';
//import { AddressComponent } from "../address/address.component";
import { Subscription } from 'rxjs/internal/Subscription';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ValidationAddressService {

  // invokeAddressComponentFunction = new EventEmitter();
  // subsVar: Subscription;

  private addressMessageSource = new Subject<string>();
  addressMessage = this.addressMessageSource.asObservable();

  constructor() { }



  sendMessage() {
    this.addressMessageSource.next();
  }


  // public onAddressComponentButtonClick() {
  //   // alert("ok valid service");
  //   this.invokeAddressComponentFunction.emit();
  //   // alert(this.invokeAddressComponentFunction.emit() + " service function");
  // }

}
