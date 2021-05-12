import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule
} from '@nebular/theme';

import { QnbAuthComponent } from './auth.component';
import { QnbLoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    QnbAuthComponent,
    QnbLoginComponent,
  ],
  imports: [
    RouterModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
  ],
  exports: [
    QnbAuthComponent,
  ],
})
export class QnbAuthModule { }
