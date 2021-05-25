import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabelCacheComponent } from './label-cache.component';

const routes: Routes = [{ path: '', component: LabelCacheComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelCacheRoutingModule { }
