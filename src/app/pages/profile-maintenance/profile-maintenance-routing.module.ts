import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMaintenanceComponent } from './profile-maintenance.component';

const routes: Routes = [
  {
    path: '', component: ProfileMaintenanceComponent,
  },
  {
    path: 'transaction-entitlement',
    loadChildren: () => import('./transaction-entitlement/transaction-entitlement.module').then(
      m => m.TransactionEntitlementModule),
  }, {
    path: 'label-cache',
    loadChildren: () => import('./label-cache/label-cache.module').then(m => m.LabelCacheModule),
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileMaintenanceRoutingModule { }
