import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbDialogModule, NbTabsetModule, NbCardModule, NbRadioModule, NbButtonModule, NbToastrModule } from '@nebular/theme';
import { PendingApprovalsRoutingModule } from './pending-approvals-routing.module';
import { PendingApprovalsComponent } from './pending-approvals.component';
import { ApprovalDetailsComponent } from './approval-details/approval-details.component';
import { RequestDetailsComponent } from '../pending-requests/request-details/request-details.component';
import { ApprovalRoleDetailsComponent } from './approval-role-details/approval-role-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PendingApprovalsComponent,
    ApprovalDetailsComponent,
    RequestDetailsComponent,
    ApprovalRoleDetailsComponent,
  ],
  imports: [
    NbIconModule,
    NbDialogModule.forChild(),
    NbToastrModule.forRoot(),
    NbTabsetModule,
    NbCardModule,
    FormsModule,
    NbRadioModule,
    NbButtonModule,
    CommonModule,
    PendingApprovalsRoutingModule,
  ],
})
export class PendingApprovalsModule { }
