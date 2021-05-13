import { NgModule } from '@angular/core';

import { QnbUsersRoutingModule } from './users-routing.module';
import { QnbUsersComponent } from './users.component';

@NgModule({
  declarations: [
    QnbUsersComponent,
  ],
  imports: [
    QnbUsersRoutingModule,
  ],
})
export class QnbUsersModule { }
