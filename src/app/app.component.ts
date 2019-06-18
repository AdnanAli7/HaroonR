import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MatBottomSheet } from '@angular/material';

import { Event, Router, NavigationStart, NavigationEnd } from "@angular/router";

import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // constructor(private bottomSheet: MatBottomSheet) { }

  constructor(private bottomSheet: MatBottomSheet, private router: Router, private spinner: NgxSpinnerService) {

    //this.spinner.show();

    // For Spinner Show and Hide 
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        //this.spinner.show();
        this.showSpinner();
        //this.showLoadingSpinner = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        //this.showLoadingSpinner = false;
        // setTimeout(() => {
        //   /** spinner ends after 5 seconds */
        //   this.spinner.hide();
        // }, 500);
        this.hideSpinner();
      }
    });
  }

  public validateEmail(Email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(Email)) {
      return false;
    } else {
      return true;
    }
  }

  public printCSS() {

    var commonCss = ".commonCss{font-family: Arial, Helvetica, sans-serif; text-align: center; }";

    var cssHeading = ".cssHeading {font-size: 25px; font-weight: bold;}";
    var cssAddress = ".cssAddress {font-size: 16px; }";
    var cssContact = ".cssContact {font-size: 16px; }";

    var tableCss = "table {width: 100%; border-collapse: collapse;}    table thead tr th {text-align: left; font-family: Arial, Helvetica, sans-serif; font-weight: bole; border-bottom: 1px solid black; margin-left: -3px;}     table tbody tr td {font-family: Arial, Helvetica, sans-serif; border-bottom: 1px solid #ccc; margin-left: -3px; height: 33px;}";

    var printCss = commonCss + cssHeading + cssAddress + cssContact + tableCss;

    return printCss;
  }


  title = 'HaroonC';

  items: MenuItem[];

  //show bottom sheet
  

  //*Functions for Show & Hide Spinner
  showSpinner() {
    this.spinner.show();
  }


  hideSpinner() {
    setTimeout(() => {
      /** spinner ends after process done*/
      this.spinner.hide();
    }, 1000);
  }

}
