import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbInputModule, NbSelectModule,
  NbTimepickerModule, NbTreeGridModule } from '@nebular/theme';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { } from '@angular-material-components/moment-adapter';

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
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
  ],
})
export class TransactionEntitlementModule { }
