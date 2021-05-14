import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NbTreeGridModule, NbToggleModule, NbDialogModule, NbDatepickerModule, NbSelectModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbRadioModule, NbTabsetModule } from '@nebular/theme';
import { QnbRolesRoutingModule } from './roles-routing.module';
import { QnbRolesComponent } from './roles.component';

@NgModule({
  declarations: [
    QnbRolesComponent,
  ],
  imports: [
    CommonModule,
    QnbRolesRoutingModule,
    NbTreeGridModule,
    NbDialogModule,
    NbSelectModule,
    NbCardModule,
    NbCheckboxModule,
  ],
})
export class QnbRolesModule { }
