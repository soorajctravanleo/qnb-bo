import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbIconModule,
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
import { DeleteRoleComponent } from './delete-role/delete-role.component';

@NgModule({
  declarations: [
    QnbRolesComponent,
    CreateRoleComponent,
    DeleteRoleComponent,
  ],
  imports: [
    NbIconModule,
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
