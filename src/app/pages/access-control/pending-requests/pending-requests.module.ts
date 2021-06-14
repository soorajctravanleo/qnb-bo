import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbIconModule,
  NbButtonModule,
  NbDialogModule,
  NbTabsetModule,
  NbCardModule,
} from '@nebular/theme';
import { PendingRequestsRoutingModule } from './pending-requests-routing.module';
import { PendingRequestsComponent } from './pending-requests.component';
import { RequestRoleDetailsComponent } from './request-role-details/request-role-details.component';
import { PipeModule } from '../../../_helpers/pipe/pipe.module';

@NgModule({
  declarations: [PendingRequestsComponent, RequestRoleDetailsComponent],
  imports: [
    NbIconModule,
    NbButtonModule,
    NbDialogModule.forChild(),
    CommonModule,
    NbTabsetModule,
    NbCardModule,
    PendingRequestsRoutingModule,
    PipeModule.forRoot(),
  ],
})
export class PendingRequestsModule { }
