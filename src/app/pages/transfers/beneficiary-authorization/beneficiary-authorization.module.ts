import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiaryAuthorizationRoutingModule } from './beneficiary-authorization-routing.module';
import { BeneficiaryAuthorizationComponent } from './beneficiary-authorization.component';


@NgModule({
  declarations: [
    BeneficiaryAuthorizationComponent,
  ],
  imports: [
    CommonModule,
    BeneficiaryAuthorizationRoutingModule,
  ],
})
export class BeneficiaryAuthorizationModule { }
