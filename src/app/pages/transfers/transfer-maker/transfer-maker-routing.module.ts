import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferMakerComponent } from './transfer-maker.component';

const routes: Routes = [{ path: '', component: TransferMakerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferMakerRoutingModule { }
