import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionEntitlementRoutingModule } from './transaction-entitlement-routing.module';
import { TransactionEntitlementComponent } from './transaction-entitlement.component';


@NgModule({
  declarations: [
    TransactionEntitlementComponent
  ],
  imports: [
    CommonModule,
    TransactionEntitlementRoutingModule
  ]
})
export class TransactionEntitlementModule { }
