import { NgModule } from '@angular/core';
import { QnbAccessControlRoutingModule } from './access-control-routing.module';
import { QnbAccessControlComponent } from './access-control.component';

@NgModule({
  declarations: [
    QnbAccessControlComponent,
  ],
  imports: [
    QnbAccessControlRoutingModule,
  ],
})
export class QnbAccessControlModule { }
