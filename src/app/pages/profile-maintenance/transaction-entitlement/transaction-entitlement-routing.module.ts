import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionEntitlementComponent } from './transaction-entitlement.component';

const routes: Routes = [{ path: '', component: TransactionEntitlementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionEntitlementRoutingModule { }
