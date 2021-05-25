import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentReportsComponent } from './payment-reports.component';

const routes: Routes = [{ path: '', component: PaymentReportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentReportsRoutingModule { }
