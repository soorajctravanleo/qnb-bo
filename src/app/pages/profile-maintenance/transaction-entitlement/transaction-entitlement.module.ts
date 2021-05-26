import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionEntitlementRoutingModule } from './transaction-entitlement-routing.module';
import { TransactionEntitlementComponent } from './transaction-entitlement.component';
import { NbButtonModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { QnbCustomComponentsModule } from '../../../components/custom-components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TransactionEntitlementComponent,
  ],
  imports: [
    QnbCustomComponentsModule,
    CommonModule,
    TransactionEntitlementRoutingModule,
    NbSelectModule,
    NbCardModule,
    ReactiveFormsModule,
    NbButtonModule,
  ],
})
export class TransactionEntitlementModule { }
