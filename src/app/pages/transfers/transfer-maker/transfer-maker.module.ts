import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbRadioModule, NbSelectModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { TransferMakerRoutingModule } from './transfer-maker-routing.module';
import { TransferMakerComponent } from './transfer-maker.component';
@NgModule({
  declarations: [
    TransferMakerComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NbRadioModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    TransferMakerRoutingModule,
  ],
})
export class TransferMakerModule { }
