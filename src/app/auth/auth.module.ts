import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
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
    FormsModule,
    CommonModule,
  ],
  exports: [
    QnbAuthComponent,
  ],
})
export class QnbAuthModule { }
