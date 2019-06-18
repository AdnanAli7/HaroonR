import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { PNPrimeModule } from './shared/pnprime/pnprime.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './shared/pipe-filters/pipe-search';
import { ChartModule } from 'angular-highcharts';
import { ToastrModule } from 'ng6-toastr-notifications';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxMaskModule } from "ngx-mask";
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ExportAsModule } from 'ngx-export-as';

import { AppRoutingModule } from './app-routing.module';
import { CurrencyComponent } from './components/currency/currency.component';

import { IgxGridModule, IgxExcelExporterService, IgxCsvExporterService } from "igniteui-angular";

import { AddressComponent } from './shared/address/address.component';

import { ValidationAddressService } from "../app/shared/services/validation-address.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    CurrencyComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartModule,
    ReactiveFormsModule,
    PNPrimeModule,
    ToastrModule.forRoot(),
    HttpModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    IgxGridModule,
    NgxPaginationModule,
    OrderModule,
    NgxSpinnerModule,
    ExportAsModule
  ],
  providers: [IgxExcelExporterService, IgxCsvExporterService, ValidationAddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
