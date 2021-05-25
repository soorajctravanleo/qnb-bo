import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiaryAuthorizationComponent } from './beneficiary-authorization.component';

const routes: Routes = [{ path: '', component: BeneficiaryAuthorizationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiaryAuthorizationRoutingModule { }
