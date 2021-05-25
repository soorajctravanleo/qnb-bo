import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferCheckerRoutingModule } from './transfer-checker-routing.module';
import { TransferCheckerComponent } from './transfer-checker.component';


@NgModule({
  declarations: [
    TransferCheckerComponent,
  ],
  imports: [
    CommonModule,
    TransferCheckerRoutingModule,
  ],
})
export class TransferCheckerModule { }
