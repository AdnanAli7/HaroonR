import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyComponent } from './components/currency/currency.component';

import { AddressComponent } from './shared/address/address.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: CurrencyComponent
  // },
  {
    path: 'currency',
    component: CurrencyComponent
  },
  {
    path: 'address',
    component: AddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
