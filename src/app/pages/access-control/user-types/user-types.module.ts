import { NgModule } from '@angular/core';

import { QnbUserTypesRoutingModule } from './user-types-routing.module';
import { QnbUserTypesComponent } from './user-types.component';

@NgModule({
  declarations: [
    QnbUserTypesComponent,
  ],
  imports: [
    QnbUserTypesRoutingModule,
  ],
})
export class QnbUserTypesModule { }
