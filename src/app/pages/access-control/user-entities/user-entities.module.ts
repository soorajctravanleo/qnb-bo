import { NgModule } from '@angular/core';

import { QnbUserEntitiesRoutingModule } from './user-entities-routing.module';
import { QnbUserEntitiesComponent } from './user-entities.component';

@NgModule({
  declarations: [
    QnbUserEntitiesComponent,
  ],
  imports: [
    QnbUserEntitiesRoutingModule,
  ],
})
export class QnbUserEntitiesModule { }
