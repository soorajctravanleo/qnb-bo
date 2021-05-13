import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QnbUsersRoutingModule } from './users-routing.module';
import { QnbUsersComponent } from './users.component';
import { NbToggleModule, NbDialogModule, NbDatepickerModule, NbSelectModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbRadioModule, NbTabsetModule } from '@nebular/theme';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserProfileTabComponent } from './create-user/user-profile-tab/user-profile-tab.component';
import { AdditionalInfoTabComponent } from './create-user/additional-info-tab/additional-info-tab.component';
import { LoginRestrictionTabComponent } from './create-user/login-restriction-tab/login-restriction-tab.component';
import { ListUsersComponent } from './list-users/list-users.component';
@NgModule({
  declarations: [
    QnbUsersComponent,
    CreateUserComponent,
    UserProfileTabComponent,
    AdditionalInfoTabComponent,
    LoginRestrictionTabComponent,
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
    QnbUsersRoutingModule
  ],
})
export class QnbUsersModule { }
