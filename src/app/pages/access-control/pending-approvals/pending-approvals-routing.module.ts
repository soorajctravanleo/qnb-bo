import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingApprovalsComponent } from './pending-approvals.component';

const routes: Routes = [{ path: '', component: PendingApprovalsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingApprovalsRoutingModule { }
