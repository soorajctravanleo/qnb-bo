import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QnbUsersRoutingModule } from './users-routing.module';
import { QnbUsersComponent } from './users.component';
import {
  NbTreeGridModule,
  NbToggleModule,
  NbDialogModule,
  NbDatepickerModule,
  NbSelectModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule,
  NbTabsetModule,
} from '@nebular/theme';

import { CreateUserComponent } from './create-user/create-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [
    QnbUsersComponent,
    CreateUserComponent,
    ListUsersComponent,
  ],
  imports: [
    NbToggleModule,
    CommonModule,
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbSelectModule,
    NbInputModule,
    NbCardModule,
    NbRadioModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbButtonModule,
    NbTreeGridModule,
    QnbUsersRoutingModule,
  ],
})
export class QnbUsersModule { }
