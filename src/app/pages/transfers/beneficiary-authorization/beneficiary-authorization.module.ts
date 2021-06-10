import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbButtonModule, NbCardModule, NbIconModule, NbTableModule } from '@nebular/theme';

import { BeneficiaryAuthorizationRoutingModule } from './beneficiary-authorization-routing.module';
import { BeneficiaryAuthorizationComponent } from './beneficiary-authorization.component';
import { QnbCustomComponentsModule } from '../../../components/custom-components.module';

@NgModule({
  declarations: [
    BeneficiaryAuthorizationComponent,
  ],
  imports: [
    NbCardModule,
    NbTableModule,
    NbButtonModule,
    NbIconModule,
    CommonModule,
    BeneficiaryAuthorizationRoutingModule,
    QnbCustomComponentsModule,
  ],
})
export class BeneficiaryAuthorizationModule { }
