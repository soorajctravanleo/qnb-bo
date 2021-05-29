import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbTabsetModule, NbCardModule, } from '@nebular/theme';
import { PendingRequestsRoutingModule } from './pending-requests-routing.module';
import { PendingRequestsComponent } from './pending-requests.component';


@NgModule({
  declarations: [
    PendingRequestsComponent,
  ],
  imports: [
    CommonModule,
    NbTabsetModule,
    NbCardModule,
    PendingRequestsRoutingModule
  ]
})
export class PendingRequestsModule { }
