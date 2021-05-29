import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiaryAuthorizationRoutingModule } from './beneficiary-authorization-routing.module';
import { BeneficiaryAuthorizationComponent } from './beneficiary-authorization.component';

import { QnbCustomComponentsModule } from '../../../components/custom-components.module';
import { NbCardModule, NbSelectModule, NbDatepickerModule, NbInputModule, NbButtonModule, NbRadioModule, NbTreeGridModule, NbTimepickerModule } from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [
    BeneficiaryAuthorizationComponent,
  ],
  imports: [
    CommonModule,
    BeneficiaryAuthorizationRoutingModule,
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
export class BeneficiaryAuthorizationModule { }
