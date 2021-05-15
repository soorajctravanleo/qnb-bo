import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbButtonModule,
  NbTreeGridModule,
  NbDialogModule,
  NbSelectModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';

import { QnbRolesRoutingModule } from './roles-routing.module';
import { QnbRolesComponent } from './roles.component';
import { CreateRoleComponent } from './create-role/create-role.component';

@NgModule({
  declarations: [
    QnbRolesComponent,
    CreateRoleComponent,
  ],
  imports: [

    NbInputModule,
    CommonModule,
    NbButtonModule,
    QnbRolesRoutingModule,
    NbTreeGridModule,
    NbDialogModule.forChild(),
    NbSelectModule,
    NbCardModule,
    NbCheckboxModule,
  ],
})
export class QnbRolesModule { }
