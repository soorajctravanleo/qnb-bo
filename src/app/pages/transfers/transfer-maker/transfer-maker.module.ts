import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferMakerRoutingModule } from './transfer-maker-routing.module';
import { TransferMakerComponent } from './transfer-maker.component';


@NgModule({
  declarations: [
    TransferMakerComponent
  ],
  imports: [
    CommonModule,
    TransferMakerRoutingModule
  ]
})
export class TransferMakerModule { }
