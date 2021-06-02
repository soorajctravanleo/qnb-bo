import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbTableModule, NbCheckboxModule, NbButtonModule } from '@nebular/theme';

import { TransferCheckerRoutingModule } from './transfer-checker-routing.module';
import { TransferCheckerComponent } from './transfer-checker.component';
import { QnbCustomComponentsModule } from '../../../components/custom-components.module';


@NgModule({
  declarations: [
    TransferCheckerComponent,
  ],
  imports: [
    CommonModule,
    TransferCheckerRoutingModule,
    QnbCustomComponentsModule,
    NbCardModule,
    NbTableModule,
    NbCheckboxModule,
    NbButtonModule,
  ],
})
export class TransferCheckerModule { }
