import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AppComponent } from '../../app.component';

import { ValidationAddressService } from "src/app/shared/services/validation-address.service";


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})

export class AddressComponent implements OnInit {

  //branchBox = true;
  //subsidiaryBox = true;

  addBox = true;

  contactType;
  country;
  area;
  network;
  addressType;
  emailType;

  countryListForAddress;
  provinceList;
  districtList;
  cityList;


  //contact Detail
  contactDetail = [
    {
      contactType: "",
      countryPhoneCode: "countryCode",
      contactCode: "",
      areaCode: true,
      mobileCode: false,
      contactNumber: ""
    }
  ];

  //address Detail
  addressDetail = [
    {
      addressType: "",
      address: "",
      countryName: "",
      countryCode: "",
      provinceList: "",
      provinceCode: "",
      districtList: "",
      districtCode: "",
      cityList: "",
      cityCode: ""
    }
  ];

  //Emails Detail
  emailDetail = [
    {
      type: "",
      email: ""
    }
  ];


  constructor(public toastr: ToastrManager,
    private app: AppComponent,
    private validObj: ValidationAddressService) {
    this.contactType = [
      { label: 'Fax', value: 'Fax' },
      { label: 'Telephone', value: 'Telephone' },
      { label: 'Mobile', value: 'Mobile' },
    ];

    //Country Code
    this.country = [
      { label: "Pakistan +92", value: "+92" },
      { label: "Turkey +90", value: "+90" },
      { label: "US +1", value: "+1" }
    ];

    //Area Code
    this.area = [
      { label: 51, areaName: "Islamabad", value: "51" },
      { label: 21, areaName: "Karachi", value: "21" },
      { label: 42, areaName: "Lahore", value: "42" }
    ];

    //Mobile Code
    this.network = [
      { label: 300, networkName: "Jazz", value: "300" },
      { label: 313, networkName: "Zong", value: "313" },
      { label: 345, networkName: "Telenor", value: "345" },
      { label: 333, networkName: "Ufone", value: "333" }
    ];

    //Address Types
    this.addressType = [
      { label: 'Current Address', value: 'Current Address' },
      { label: 'Office Address', value: 'Office Address' },
      { label: 'Postal Address', value: 'Postal Address' }
    ];

    // Country List
    this.countryListForAddress = [
      { label: "Afghanistan", value: "AF" },
      { label: "land Islands", value: "AX" },
      { label: "Albania", value: "AL" },
      { label: "Algeria", value: "DZ" },
      { label: "American Samoa", value: "AS" },
      { label: "AndorrA", value: "AD" },
      { label: "Angola", value: "AO" },
      { label: "Anguilla", value: "AI" },
      { label: "Antarctica", value: "AQ" },
      { label: "Antigua and Barbuda", value: "AG" },
      { label: "Argentina", value: "AR" },
      { label: "Armenia", value: "AM" },
      { label: "Aruba", value: "AW" },
      { label: "Australia", value: "AU" },
      { label: "Austria", value: "AT" },
      { label: "Azerbaijan", value: "AZ" },
      { label: "Bahamas", value: "BS" },
      { label: "Bahrain", value: "BH" },
      { label: "Bangladesh", value: "BD" },
      { label: "Barbados", value: "BB" },
      { label: "Belarus", value: "BY" },
      { label: "Belgium", value: "BE" },
      { label: "Belize", value: "BZ" },
      { label: "Benin", value: "BJ" },
      { label: "Bermuda", value: "BM" },
      { label: "Bhutan", value: "BT" },
      { label: "Bolivia", value: "BO" },
      { label: "Bosnia and Herzegovina", value: "BA" },
      { label: "Botswana", value: "BW" },
      { label: "Bouvet Island", value: "BV" },
      { label: "Brazil", value: "BR" },
      { label: "British Indian Ocean Territory", value: "IO" },
      { label: "Brunei Darussalam", value: "BN" },
      { label: "Bulgaria", value: "BG" },
      { label: "Burkina Faso", value: "BF" },
      { label: "Burundi", value: "BI" },
      { label: "Cambodia", value: "KH" },
      { label: "Cameroon", value: "CM" },
      { label: "Canada", value: "CA" },
      { label: "Cape Verde", value: "CV" },
      { label: "Cayman Islands", value: "KY" },
      { label: "Central African Republic", value: "CF" },
      { label: "Chad", value: "TD" },
      { label: "Chile", value: "CL" },
      { label: "China", value: "CN" },
      { label: "Christmas Island", value: "CX" },
      { label: "Cocos (Keeling) Islands", value: "CC" },
      { label: "Colombia", value: "CO" },
      { label: "Comoros", value: "KM" },
      { label: "Congo", value: "CG" },
      { label: "Congo, The Democratic Republic of the", value: "CD" },
      { label: "Cook Islands", value: "CK" },
      { label: "Costa Rica", value: "CR" },
      { label: "Cote D\"Ivoire", value: "CI" },
      { label: "Croatia", value: "HR" },
      { label: "Cuba", value: "CU" },
      { label: "Cyprus", value: "CY" },
      { label: "Czech Republic", value: "CZ" },
      { label: "Denmark", value: "DK" },
      { label: "Djibouti", value: "DJ" },
      { label: "Dominica", value: "DM" },
      { label: "Dominican Republic", value: "DO" },
      { label: "Ecuador", value: "EC" },
      { label: "Egypt", value: "EG" },
      { label: "El Salvador", value: "SV" },
      { label: "Equatorial Guinea", value: "GQ" },
      { label: "Eritrea", value: "ER" },
      { label: "Estonia", value: "EE" },
      { label: "Ethiopia", value: "ET" },
      { label: "Falkland Islands (Malvinas)", value: "FK" },
      { label: "Faroe Islands", value: "FO" },
      { label: "Fiji", value: "FJ" },
      { label: "Finland", value: "FI" },
      { label: "France", value: "FR" },
      { label: "French Guiana", value: "GF" },
      { label: "French Polynesia", value: "PF" },
      { label: "French Southern Territories", value: "TF" },
      { label: "Gabon", value: "GA" },
      { label: "Gambia", value: "GM" },
      { label: "Georgia", value: "GE" },
      { label: "Germany", value: "DE" },
      { label: "Ghana", value: "GH" },
      { label: "Gibraltar", value: "GI" },
      { label: "Greece", value: "GR" },
      { label: "Greenland", value: "GL" },
      { label: "Grenada", value: "GD" },
      { label: "Guadeloupe", value: "GP" },
      { label: "Guam", value: "GU" },
      { label: "Guatemala", value: "GT" },
      { label: "Guernsey", value: "GG" },
      { label: "Guinea", value: "GN" },
      { label: "Guinea-Bissau", value: "GW" },
      { label: "Guyana", value: "GY" },
      { label: "Haiti", value: "HT" },
      { label: "Heard Island and Mcdonald Islands", value: "HM" },
      { label: "Holy See (Vatican City State)", value: "VA" },
      { label: "Honduras", value: "HN" },
      { label: "Hong Kong", value: "HK" },
      { label: "Hungary", value: "HU" },
      { label: "Iceland", value: "IS" },
      { label: "India", value: "IN" },
      { label: "Indonesia", value: "ID" },
      { label: "Iran, Islamic Republic Of", value: "IR" },
      { label: "Iraq", value: "IQ" },
      { label: "Ireland", value: "IE" },
      { label: "Isle of Man", value: "IM" },
      { label: "Israel", value: "IL" },
      { label: "Italy", value: "IT" },
      { label: "Jamaica", value: "JM" },
      { label: "Japan", value: "JP" },
      { label: "Jersey", value: "JE" },
      { label: "Jordan", value: "JO" },
      { label: "Kazakhstan", value: "KZ" },
      { label: "Kenya", value: "KE" },
      { label: "Kiribati", value: "KI" },
      { label: "Korea, Democratic People\"S Republic of", value: "KP" },
      { label: "Korea, Republic of", value: "KR" },
      { label: "Kuwait", value: "KW" },
      { label: "Kyrgyzstan", value: "KG" },
      { label: "Lao People\"S Democratic Republic", value: "LA" },
      { label: "Latvia", value: "LV" },
      { label: "Lebanon", value: "LB" },
      { label: "Lesotho", value: "LS" },
      { label: "Liberia", value: "LR" },
      { label: "Libyan Arab Jamahiriya", value: "LY" },
      { label: "Liechtenstein", value: "LI" },
      { label: "Lithuania", value: "LT" },
      { label: "Luxembourg", value: "LU" },
      { label: "Macao", value: "MO" },
      { label: "Macedonia, The Former Yugoslav Republic of", value: "MK" },
      { label: "Madagascar", value: "MG" },
      { label: "Malawi", value: "MW" },
      { label: "Malaysia", value: "MY" },
      { label: "Maldives", value: "MV" },
      { label: "Mali", value: "ML" },
      { label: "Malta", value: "MT" },
      { label: "Marshall Islands", value: "MH" },
      { label: "Martinique", value: "MQ" },
      { label: "Mauritania", value: "MR" },
      { label: "Mauritius", value: "MU" },
      { label: "Mayotte", value: "YT" },
      { label: "Mexico", value: "MX" },
      { label: "Micronesia, Federated States of", value: "FM" },
      { label: "Moldova, Republic of", value: "MD" },
      { label: "Monaco", value: "MC" },
      { label: "Mongolia", value: "MN" },
      { label: "Montenegro", value: "ME" },
      { label: "Montserrat", value: "MS" },
      { label: "Morocco", value: "MA" },
      { label: "Mozambique", value: "MZ" },
      { label: "Myanmar", value: "MM" },
      { label: "Namibia", value: "NA" },
      { label: "Nauru", value: "NR" },
      { label: "Nepal", value: "NP" },
      { label: "Netherlands", value: "NL" },
      { label: "Netherlands Antilles", value: "AN" },
      { label: "New Caledonia", value: "NC" },
      { label: "New Zealand", value: "NZ" },
      { label: "Nicaragua", value: "NI" },
      { label: "Niger", value: "NE" },
      { label: "Nigeria", value: "NG" },
      { label: "Niue", value: "NU" },
      { label: "Norfolk Island", value: "NF" },
      { label: "Northern Mariana Islands", value: "MP" },
      { label: "Norway", value: "NO" },
      { label: "Oman", value: "OM" },
      { label: "Pakistan", value: "PK" },
      { label: "Palau", value: "PW" },
      { label: "Palestinian Territory, Occupied", value: "PS" },
      { label: "Panama", value: "PA" },
      { label: "Papua New Guinea", value: "PG" },
      { label: "Paraguay", value: "PY" },
      { label: "Peru", value: "PE" },
      { label: "Philippines", value: "PH" },
      { label: "Pitcairn", value: "PN" },
      { label: "Poland", value: "PL" },
      { label: "Portugal", value: "PT" },
      { label: "Puerto Rico", value: "PR" },
      { label: "Qatar", value: "QA" },
      { label: "Reunion", value: "RE" },
      { label: "Romania", value: "RO" },
      { label: "Russian Federation", value: "RU" },
      { label: "RWANDA", value: "RW" },
      { label: "Saint Helena", value: "SH" },
      { label: "Saint Kitts and Nevis", value: "KN" },
      { label: "Saint Lucia", value: "LC" },
      { label: "Saint Pierre and Miquelon", value: "PM" },
      { label: "Saint Vincent and the Grenadines", value: "VC" },
      { label: "Samoa", value: "WS" },
      { label: "San Marino", value: "SM" },
      { label: "Sao Tome and Principe", value: "ST" },
      { label: "Saudi Arabia", value: "SA" },
      { label: "Senegal", value: "SN" },
      { label: "Serbia", value: "RS" },
      { label: "Seychelles", value: "SC" },
      { label: "Sierra Leone", value: "SL" },
      { label: "Singapore", value: "SG" },
      { label: "Slovakia", value: "SK" },
      { label: "Slovenia", value: "SI" },
      { label: "Solomon Islands", value: "SB" },
      { label: "Somalia", value: "SO" },
      { label: "South Africa", value: "ZA" },
      { label: "South Georgia and the South Sandwich Islands", value: "GS" },
      { label: "Spain", value: "ES" },
      { label: "Sri Lanka", value: "LK" },
      { label: "Sudan", value: "SD" },
      { label: "Surilabel", value: "SR" },
      { label: "Svalbard and Jan Mayen", value: "SJ" },
      { label: "Swaziland", value: "SZ" },
      { label: "Sweden", value: "SE" },
      { label: "Switzerland", value: "CH" },
      { label: "Syrian Arab Republic", value: "SY" },
      { label: "Taiwan, Province of China", value: "TW" },
      { label: "Tajikistan", value: "TJ" },
      { label: "Tanzania, United Republic of", value: "TZ" },
      { label: "Thailand", value: "TH" },
      { label: "Timor-Leste", value: "TL" },
      { label: "Togo", value: "TG" },
      { label: "Tokelau", value: "TK" },
      { label: "Tonga", value: "TO" },
      { label: "Trinidad and Tobago", value: "TT" },
      { label: "Tunisia", value: "TN" },
      { label: "Turkey", value: "TR" },
      { label: "Turkmenistan", value: "TM" },
      { label: "Turks and Caicos Islands", value: "TC" },
      { label: "Tuvalu", value: "TV" },
      { label: "Uganda", value: "UG" },
      { label: "Ukraine", value: "UA" },
      { label: "United Arab Emirates", value: "AE" },
      { label: "United Kingdom", value: "GB" },
      { label: "United States", value: "US" },
      { label: "United States Minor Outlying Islands", value: "UM" },
      { label: "Uruguay", value: "UY" },
      { label: "Uzbekistan", value: "UZ" },
      { label: "Vanuatu", value: "VU" },
      { label: "Venezuela", value: "VE" },
      { label: "Viet Nam", value: "VN" },
      { label: "Virgin Islands, British", value: "VG" },
      { label: "Virgin Islands, U.S.", value: "VI" },
      { label: "Wallis and Futuna", value: "WF" },
      { label: "Western Sahara", value: "EH" },
      { label: "Yemen", value: "YE" },
      { label: "Zambia", value: "ZM" },
      { label: "Zimbabwe", value: "ZW" }
    ];

    //Province List

    this.provinceList = [
      { label: "Punjab ", value: "Punjab" },
      { label: "Pakhtoon Khuwah  ", value: "KPK" },
      { label: "Sindh ", value: "Sindh " },
      { label: "Balouchistan  ", value: "Balouchistan " },
      { label: "Gilgit Baltistan ", value: "Gilgit Baltistan" }
    ];

    //City List

    this.cityList = [
      { label: "Islamabad ", value: "Islamabad" },
      { label: "Lahore", value: "Lahore" },
      { label: "Peshawer", value: "Peshawer" },
      { label: "Karachi ", value: "Karachi " },
      { label: "Quetta  ", value: "Quetta " },
      { label: "Gilgit", value: "Gilgit" }
    ];

    //District List

    this.districtList = [
      { label: "Attock ", value: "Attock" },
      { label: "Gujranwala", value: "Gujranwala" },
      { label: "Faisalabad ", value: "Faisalabad " },
      { label: "Jhelum  ", value: "Jhelum " },
      { label: "Sialkot", value: "Sialkot" },
    ];

    //Email Types
    this.emailType = [
      { label: 'Personal Email', value: 'Personal Email' },
      { label: 'Office Email', value: 'Office Email' }
    ];

  }

  ngOnInit() {

    this.validObj.addressMessage.subscribe(
      message => {
        this.firstFunction();

        if (this.addressDetail.length == 0 || this.contactDetail.length == 0 || this.emailDetail.length == 0) {
          alert("Good Morning Teacher");
          this.firstValidation();
        }
        else if (this.addressDetail.length > 0 || this.contactDetail.length > 0 || this.emailDetail.length > 0) {
          alert("Thank You Teacher");
          this.secondValidation();
        }
      }
    );



    // if (this.validObj.subsVar == undefined) {
    //   alert("on load address");
    //   this.validObj.subsVar = this.validObj.invokeAddressComponentFunction.subscribe(() => {
    //     // alert("address before first");
    //     // this.firstValidation();
    //     // alert("address after first");
    //     // this.secondValidation();

    //     this.secondValidation();
    //   });
    // }

    this.clear();
  }


  clear() {
    this.addressDetail = [
      {
        addressType: "",
        address: "",
        countryName: "",
        countryCode: "",
        provinceList: "",
        provinceCode: "",
        districtList: "",
        districtCode: "",
        cityList: "",
        cityCode: ""
      }
    ];

    this.contactDetail = [
      {
        contactType: "",
        countryPhoneCode: "countryCode",
        contactCode: "",
        areaCode: true,
        mobileCode: false,
        contactNumber: ""
      }
    ];

    this.emailDetail = [
      {
        type: "",
        email: ""
      }
    ];

  }

  firstFunction() {
    alert('Hello ' + '\nWelcome to C# Corner \nFunction in First Component');
  }
  // onServiceCall() {
  //   if (this.validObj.subsVar == undefined) {
  //     alert("address");
  //     this.validObj.subsVar = this.validObj.invokeAddressComponentFunction.subscribe(() => {
  //       alert("address before first");
  //       this.firstValidation();
  //       alert("address after first");
  //       this.secondValidation();
  //     });
  //   }
  // }


  onContactChange(contactType, item) {

    if (contactType == "Fax") {
      item.areaCode = true;
      item.mobileCode = false;
    }
    else if (contactType == "Telephone") {
      item.areaCode = true;
      item.mobileCode = false;
    }
    else if (contactType == "Mobile") {
      item.areaCode = false;
      item.mobileCode = true;
    }
    else {
      return;
    }
  }

  //* Add Address
  addAddress() {
    this.addressDetail.push({
      addressType: "",
      address: "",
      countryName: "",
      countryCode: "",
      provinceList: "",
      provinceCode: "",
      districtList: "",
      districtCode: "",
      cityList: "",
      cityCode: ""
    });
  }

  //* Add Contact
  addContact() {
    this.contactDetail.push({
      contactType: "",
      countryPhoneCode: "countryCode",
      contactCode: "",
      areaCode: true,
      mobileCode: false,
      contactNumber: ""
    });
  }

  //* Add Email
  addEmail() {
    this.emailDetail.push({
      type: "",
      email: ""
    });
  }


  //*Deleting address row
  removeAddress(item) {
    this.addressDetail.splice(item, 1);
  }

  //*Deleting contact row
  removeContact(item) {
    this.contactDetail.splice(item, 1);
  }

  //*Deleting address row
  removeEmail(item) {
    this.emailDetail.splice(item, 1);
  }

  //*-----------------------Validation Start---------------------//

  //* When there is no address, contact and email field added.
  firstValidation() {
    alert("OK First Validation Called...!!!");
    // address type conditions
    alert(this.addressDetail.length);

    if (this.addressDetail.length > 0) {
      alert("Please Add Address Info ");
      this.toastr.errorToastr('Please Add Address Info', 'Error', { toastTimeout: (2500) });
      //return false;
    }
    // contact type conditions
    else if (this.contactDetail.length > 0) {
      alert("Please Add Contact Info ");
      this.toastr.errorToastr('Please Add Contact Info Type', 'Error', { toastTimeout: (2500) });
      //return false;
    }
    // email type conditions
    else if (this.emailDetail.length > 0) {
      alert("Please Add Email Info ");
      this.toastr.errorToastr('Please Add Email Info', 'Error', { toastTimeout: (2500) });
      //return false;
    }
  }


  //*When address, contact and email fields are present
  secondValidation() {
    this.toastr.errorToastr('Please Select Address Type', 'Error', { toastTimeout: (2500) });
    if (this.addressDetail[0].addressType.trim() == "") {
      alert(this.addressDetail[0].addressType.trim() + "Enter Address type");
      this.toastr.errorToastr('Please Select Address Type', 'Error', { toastTimeout: (2500) });

    }

    // address type conditions
    if (this.addressDetail.length > 0) {
      for (let i = 0; i < this.addressDetail.length; i++) {
        if (this.addressDetail[i].addressType.trim() == "") {
          this.toastr.errorToastr('Please Select Address Type', 'Error', { toastTimeout: (2500) });
          return false;
        }
        else if (this.addressDetail[i].address.trim() == "") {
          this.toastr.errorToastr('Please Enter Address', 'Error', { toastTimeout: (2500) });
          return false;
        }
        else if (this.addressDetail[i].countryCode.trim() == "") {
          this.toastr.errorToastr('Please Select Country', 'Error', { toastTimeout: (2500) });
          return false;
        }
        else if (this.addressDetail[i].provinceCode.trim() == "") {
          this.toastr.errorToastr('Please Select Province', 'Error', { toastTimeout: (2500) });
          return false;
        }
        else if (this.addressDetail[i].districtCode.trim() == "") {
          this.toastr.errorToastr('Please Select District', 'Error', { toastTimeout: (2500) });
          return false;
        }
        else if (this.addressDetail[i].cityCode.trim() == "") {
          this.toastr.errorToastr('Please Select City', 'Error', { toastTimeout: (2500) });
          return false;
        }
      }
    }
    // contact type conditions
    if (this.contactDetail.length > 0) {
      for (let i = 0; i < this.contactDetail.length; i++) {
        if (this.contactDetail[i].contactType.trim() == "") {
          this.toastr.errorToastr('Please Select Contact Type', 'Error', { toastTimeout: (2500) });
          return false;
        }
        else if (this.contactDetail[i].countryPhoneCode.trim() == "countryCode") {
          this.toastr.errorToastr('Please Select Country Code', 'Error', { toastTimeout: (2500) });
          return false;
        }
        else if (this.contactDetail[i].contactCode.trim() == "") {
          this.toastr.errorToastr('Please Select Contact Code', 'Error', { toastTimeout: (2500) });
          return false;
        }
        else if (this.contactDetail[i].contactNumber.trim() == "") {
          this.toastr.errorToastr('Please Enter Contact Number', 'Error', { toastTimeout: (2500) });
          return false;
        }
      }
    }
    // email type conditions
    if (this.emailDetail.length > 0) {
      for (let i = 0; i < this.emailDetail.length; i++) {
        if (this.emailDetail[i].type.trim() == "") {
          this.toastr.errorToastr('Please Select Email Type', 'Error', { toastTimeout: (2500) });
          return false;
        }
        else if (this.emailDetail[i].email.trim() == "") {
          this.toastr.errorToastr('Please Enter Email', 'Error', { toastTimeout: (2500) });
          return false;
        }
        else if (this.isEmail(this.emailDetail[i].email.trim()) == false) {
          this.toastr.errorToastr('Invalid email', 'Error', { toastTimeout: (2500) });
          return false;
        }
      }
    }
  }

  //* function for email validation
  isEmail(email) {
    return this.app.validateEmail(email);
  }

  //*-----------------------Validation End-----------------------//


}
