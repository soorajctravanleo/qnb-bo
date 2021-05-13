import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';

import { QnbUserTypesRoutingModule } from './user-types-routing.module';
import { QnbUserTypesComponent } from './user-types.component';

@NgModule({
  declarations: [
    QnbUserTypesComponent,
  ],
  imports: [
    QnbUserTypesRoutingModule,
    ThemeModule,
  ],
})
export class QnbUserTypesModule { }
