import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  imports: [
    CommonModule,
    OrganizationChartModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputTextModule
  ],
  exports: [
    OrganizationChartModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputTextModule
  ],
  declarations: []
})
export class PNPrimeModule { }
