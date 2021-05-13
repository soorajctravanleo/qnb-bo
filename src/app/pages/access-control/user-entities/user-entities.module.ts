import { NgModule } from '@angular/core';

import { QnbCustomComponentsModule } from '../../../components/custom-components.module';

import { QnbUserEntitiesRoutingModule } from './user-entities-routing.module';
import { QnbUserEntitiesComponent } from './user-entities.component';

@NgModule({
  declarations: [
    QnbUserEntitiesComponent,
  ],
  imports: [
    QnbUserEntitiesRoutingModule,
    QnbCustomComponentsModule,
  ],
})
export class QnbUserEntitiesModule { }
