import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferCheckerComponent } from './transfer-checker.component';

const routes: Routes = [{ path: '', component: TransferCheckerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferCheckerRoutingModule { }
