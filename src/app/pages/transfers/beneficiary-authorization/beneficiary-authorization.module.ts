import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTableModule } from '@nebular/theme';

import { BeneficiaryAuthorizationRoutingModule } from './beneficiary-authorization-routing.module';
import { BeneficiaryAuthorizationComponent } from './beneficiary-authorization.component';
import { QnbCustomComponentsModule } from '../../../components/custom-components.module';
import { BeneficiaryAuthorizationDetailsComponent } from './beneficiary-authorization-details/beneficiary-authorization-details.component';

@NgModule({
  declarations: [
    BeneficiaryAuthorizationComponent,
    BeneficiaryAuthorizationDetailsComponent,
  ],
  imports: [
    NbCardModule,
    NbTableModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    CommonModule,
    BeneficiaryAuthorizationRoutingModule,
    QnbCustomComponentsModule,
  ],
})
export class BeneficiaryAuthorizationModule { }
