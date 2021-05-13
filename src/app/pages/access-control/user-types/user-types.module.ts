import { NgModule } from '@angular/core';

import { QnbCustomComponentsModule } from '../../../components/custom-components.module';

import { QnbUserTypesRoutingModule } from './user-types-routing.module';
import { QnbUserTypesComponent } from './user-types.component';

@NgModule({
  declarations: [
    QnbUserTypesComponent,
  ],
  imports: [
    QnbUserTypesRoutingModule,
    QnbCustomComponentsModule,
  ],
})
export class QnbUserTypesModule { }
