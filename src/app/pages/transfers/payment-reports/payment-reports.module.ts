import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentReportsRoutingModule } from './payment-reports-routing.module';
import { PaymentReportsComponent } from './payment-reports.component';


@NgModule({
  declarations: [
    PaymentReportsComponent,
  ],
  imports: [
    CommonModule,
    PaymentReportsRoutingModule,
  ],
})
export class PaymentReportsModule { }
