import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbInputModule, NbSelectModule,
  NbTimepickerModule, NbTreeGridModule } from '@nebular/theme';
import { TransactionEntitlementRoutingModule } from './transaction-entitlement-routing.module';
import { TransactionEntitlementComponent } from './transaction-entitlement.component';
import { QnbCustomComponentsModule } from '../../../components/custom-components.module';


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
    NbTreeGridModule,
    NbCheckboxModule,
    NbTimepickerModule,
    NbDatepickerModule,
    NbInputModule,
  ],
})
export class TransactionEntitlementModule { }
