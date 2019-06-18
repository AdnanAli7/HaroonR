import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { OrderPipe } from 'ngx-order-pipe';
import { strictEqual } from 'assert';
import { AppComponent } from '../../app.component';
import * as jsPDF from 'jspdf';
import {
    IgxExcelExporterOptions,
    IgxExcelExporterService,
    IgxGridComponent,
    IgxCsvExporterService,
    IgxCsvExporterOptions,
    CsvFileTypes
} from "igniteui-angular";
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

//----------------------------------------------------------------------------//
//-------------------Working of this typescript file are as follows-----------//
//-------------------Getting currency data into main table -------------------//
//-------------------Add new currency into database --------------------------//
//-------------------Update currency into database ---------------------------//
//-------------------Delete currency from database ---------------------------//
//-------------------Export into PDF, CSV, Excel -----------------------------//
//-------------------For sorting the record-----------------------------//
//----------------------------------------------------------------------------//


declare var $: any;
@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})

export class CurrencyComponent implements OnInit {

    //export file as pdf
    exportAsConfig: ExportAsConfig = {
        type: 'pdf',
        elementId: 'mytable',
    };


    serverUrl = "http://localhost:41370/";
    tokenKey = "token";

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    // list for excel data
    excelDataList = [];

    //* variables for pagination and orderby pipe
    p = 1;
    order = 'info.name';
    reverse = false;
    sortedCollection: any[];
    itemPerPage = '10';


    //*variable for print css
    printCss = "{table: {'border': 'solid 1px', 'width' : '100%'}}";

    //*Variables for NgModels
    tblSearch;
    dCurrencyId = '';
    currencyId = '';
    currencyName = '';
    countryName = '';
    txtdPassword = '';
    txtdPin = '';

    //*List Variables
    currencies = [];

    constructor(
        private exportAsService: ExportAsService,
        private toastr: ToastrManager,
        private app: AppComponent,
        private http: HttpClient,
        private orderPipe: OrderPipe,
        private excelExportService: IgxExcelExporterService,
        private csvExportService: IgxCsvExporterService) { }

    ngOnInit() {

        this.getCurrency();
    }


    @ViewChild("excelDataContent") public excelDataContent: IgxGridComponent;//For excel
    @ViewChild("exportPDF") public exportPDF: ElementRef;

    //function for get all saved currencies from db
    getCurrency() {
        
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

        this.http.get(this.serverUrl + 'api/getCurrency', { headers: reqHeader }).subscribe((data: any) => {
            this.currencies = data
        });
    }


    //function for get all filtered currencies from db
    getFilteredCurrency() {
    
        if (this.countryName == undefined || this.countryName == "" ) {
            this.toastr.errorToastr('Please Enter Currency Name', 'Error', { toastTimeout: (2500) });
            return false;
        }
        else{

            var updateData = {
                "CurrencyName": this.currencyName,
                "cntryName": this.countryName
            };        
    
            var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    
            this.http.post(this.serverUrl + 'api/getFilteredCurrency', updateData, { headers: reqHeader }).subscribe((data: any) => {
                this.currencies = data
            });

        }
    }


    //function for empty all fields
    clear() {
        this.currencyName = "";
        this.countryName = "";
        this.txtdPassword = '';
        this.txtdPin = '';

        this.getCurrency();

    }


    //function for sort table data 
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }


    // Function for Print Dive *******************/
    printDiv() {

        // var commonCss = ".commonCss{font-family: Arial, Helvetica, sans-serif; text-align: center; }";

        // var cssHeading = ".cssHeading {font-size: 25px; font-weight: bold;}";
        // var cssAddress = ".cssAddress {font-size: 16px; }";
        // var cssContact = ".cssContact {font-size: 16px; }";

        // var tableCss = "table {width: 100%; border-collapse: collapse;}    table thead tr th {text-align: left; font-family: Arial, Helvetica, sans-serif; font-weight: bole; border-bottom: 1px solid black; margin-left: -3px;}     table tbody tr td {font-family: Arial, Helvetica, sans-serif; border-bottom: 1px solid #ccc; margin-left: -3px; height: 33px;}";

        var printCss = this.app.printCSS();

        //printCss = printCss + "";


        var contents = $("#printArea").html();

        var frame1 = $('<iframe />');
        frame1[0].name = "frame1";
        frame1.css({ "position": "absolute", "top": "-1000000px" });
        $("body").append(frame1);
        var frameDoc = frame1[0].contentWindow ? frame1[0].contentWindow : frame1[0].contentDocument.document ? frame1[0].contentDocument.document : frame1[0].contentDocument;
        frameDoc.document.open();

        //Create a new HTML document.
        frameDoc.document.write('<html><head><title>DIV Contents</title>' + "<style>" + printCss + "</style>");


        //Append the external CSS file.  <link rel="stylesheet" href="../../../styles.scss" />  <link rel="stylesheet" href="../../../../node_modules/bootstrap/dist/css/bootstrap.min.css" />
        frameDoc.document.write('<style type="text/css" media="print">/*@page { size: landscape; }*/</style>');

        frameDoc.document.write('</head><body>');

        //Append the DIV contents.
        frameDoc.document.write(contents);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();

        //alert(frameDoc.document.head.innerHTML);
        // alert(frameDoc.document.body.innerHTML);

        setTimeout(function () {
            window.frames["frame1"].focus();
            window.frames["frame1"].print();
            frame1.remove();
        }, 500);
    }


    // For PDF Download
    downloadPDF() {
        this.exportAsService.save(this.exportAsConfig, 'myFile');

    }


    //For CSV File 
    public downloadCSV() {
        // case 1: When tblSearch is empty then assign full data list
        if (this.tblSearch == "") {
            var completeDataList = [];
            for (var i = 0; i < this.currencies.length; i++) {
                completeDataList.push({
                    currencyName: this.currencies[i].currencyName,
                    countryName: this.currencies[i].countryName
                });
            }
            this.csvExportService.exportData(completeDataList, new IgxCsvExporterOptions("CurrencyCompleteCSV", CsvFileTypes.CSV));
        }
        // case 2: When tblSearch is not empty then assign new data list
        else if (this.tblSearch != "") {
            var filteredDataList = [];
            for (var i = 0; i < this.currencies.length; i++) {
                if (this.currencies[i].currencyName.toUpperCase().includes(this.tblSearch.toUpperCase()) ||
                    this.currencies[i].countryName.toUpperCase().includes(this.tblSearch.toUpperCase())) {
                    filteredDataList.push({
                        currencyName: this.currencies[i].currencyName,
                        countryName: this.currencies[i].countryName
                    });
                }
            }
            if (filteredDataList.length > 0) {
                this.csvExportService.exportData(filteredDataList, new IgxCsvExporterOptions("CurrencyFilterCSV", CsvFileTypes.CSV));
            } else {
                this.toastr.errorToastr('Oops! No data found', 'Error', { toastTimeout: (2500) });
            }
        }
    }


    //For Exce File
    public downloadExcel() {
        // case 1: When tblSearch is empty then assign full data list
        if (this.tblSearch == "") {
            //var completeDataList = [];
            for (var i = 0; i < this.currencies.length; i++) {
                this.excelDataList.push({
                    currencyName: this.currencies[i].currencyName,
                    countryName: this.currencies[i].countryName
                });
            }
            this.excelExportService.export(this.excelDataContent, new IgxExcelExporterOptions("CurrencyCompleteExcel"));
            this.excelDataList = [];
        }
        // case 2: When tblSearch is not empty then assign new data list
        else if (this.tblSearch != "") {
            for (var i = 0; i < this.currencies.length; i++) {
                if (this.currencies[i].currencyName.toUpperCase().includes(this.tblSearch.toUpperCase()) ||
                    this.currencies[i].countryName.toUpperCase().includes(this.tblSearch.toUpperCase())) {
                    this.excelDataList.push({
                        currencyName: this.currencies[i].currencyName,
                        countryName: this.currencies[i].countryName
                    });
                }
            }

            if (this.excelDataList.length > 0) {
                this.excelExportService.export(this.excelDataContent, new IgxExcelExporterOptions("CurrencyFilterExcel"));
                this.excelDataList = [];
            }
            else {
                this.toastr.errorToastr('Oops! No data found', 'Error', { toastTimeout: (2500) });
            }
        }
    }
}
