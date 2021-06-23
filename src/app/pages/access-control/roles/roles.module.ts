import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbIconModule,
  NbButtonModule,
  NbToastrModule,
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
import { ReactiveFormsModule } from '@angular/forms';
import { QnbCustomComponentsModule } from '../../../components/custom-components.module';

@NgModule({
  declarations: [
    QnbRolesComponent,
    CreateRoleComponent,
    DeleteRoleComponent,
  ],
  imports: [
    FormsModule,
    NbIconModule,
    NbInputModule,
    NbToastrModule.forRoot(),
    CommonModule,
    NbButtonModule,
    QnbRolesRoutingModule,
    NbTreeGridModule,
    NbDialogModule.forChild(),
    NbSelectModule,
    NbCardModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    QnbCustomComponentsModule,
  ],
})
export class QnbRolesModule { }
