import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbSelectModule, NbDatepickerModule } from '@nebular/theme';
import { NbInputModule, NbButtonModule, NbRadioModule } from '@nebular/theme';
import { NbTreeGridModule, NbTimepickerModule } from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';

import { PaymentReportsRoutingModule } from './payment-reports-routing.module';
import { PaymentReportsComponent } from './payment-reports.component';
import { QnbCustomComponentsModule } from '../../../components/custom-components.module';


import { QnbCustomComponentsModule } from '../../../components/custom-components.module';
import { NbCardModule, NbSelectModule, NbDatepickerModule } from '@nebular/theme';
import { NbInputModule, NbButtonModule, NbRadioModule } from '@nebular/theme';
import { NbTreeGridModule, NbTimepickerModule } from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';


@NgModule({
  declarations: [
    PaymentReportsComponent,
  ],
  imports: [
    CommonModule,
    PaymentReportsRoutingModule,
    QnbCustomComponentsModule,
    NbInputModule,
    NbCardModule,
    NbSelectModule,
    NbDatepickerModule,
    NbButtonModule,
    NbTreeGridModule,
    NbRadioModule,
    NbIconModule,
    NbTimepickerModule,
  ],
})
export class PaymentReportsModule { }
