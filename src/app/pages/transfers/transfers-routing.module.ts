import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransfersComponent } from './transfers.component';

const routes: Routes = [{ path: '', component: TransfersComponent },
{
  path: 'beneficiary-authorization',
  loadChildren: () =>
    import('./beneficiary-authorization/beneficiary-authorization.module').then(
      m => m.BeneficiaryAuthorizationModule),
},
{
  path: 'transfer-maker',
  loadChildren: () => import('./transfer-maker/transfer-maker.module').then(m => m.TransferMakerModule),
},
{
  path: 'transfer-checker',
  loadChildren: () => import('./transfer-checker/transfer-checker.module').then(m => m.TransferCheckerModule),
},
{
  path: 'payment-reports',
  loadChildren: () => import('./payment-reports/payment-reports.module').then(m => m.PaymentReportsModule),
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransfersRoutingModule { }
