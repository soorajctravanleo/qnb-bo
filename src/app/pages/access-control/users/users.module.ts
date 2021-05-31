import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { QnbUsersRoutingModule } from './users-routing.module';
import { QnbUsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
  NbIconModule,
  NbToastrModule,
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
import { QnbCustomComponentsModule } from '../../../components/custom-components.module';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ChangeUserStatusComponent } from './change-user-status/change-user-status.component';

@NgModule({
  declarations: [
    QnbUsersComponent,
    CreateUserComponent,
    ListUsersComponent,
    DeleteUserComponent,
    ChangeUserStatusComponent,
  ],
  imports: [
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    NbToggleModule,
    CommonModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forChild(),
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
    QnbCustomComponentsModule,
  ],
})
export class QnbUsersModule { }
