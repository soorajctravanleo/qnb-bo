import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';

import { QnbUserEntitiesRoutingModule } from './user-entities-routing.module';
import { QnbUserEntitiesComponent } from './user-entities.component';

@NgModule({
  declarations: [
    QnbUserEntitiesComponent,
  ],
  imports: [
    QnbUserEntitiesRoutingModule,
    ThemeModule,
  ],
})
export class QnbUserEntitiesModule { }
