import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';
import { QnbCustomComponentsModule } from '../components/custom-components.module';

import { PagesComponent } from './pages.component';
import { QnbDashboardComponent } from './dashboard/dashboard.component';
import { NbCardModule, NbDialogModule, NbToastrModule } from '@nebular/theme';

// import { DashboardModule } from './dashboard/dashboard.module';
// import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { NbMenuModule } from '@nebular/theme';
import { NbRouteTabsetModule } from '@nebular/theme';

import { NbTabsetModule } from '@nebular/theme';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    // DashboardModule,
    // ECommerceModule,
    // MiscellaneousModule,
    NbDialogModule.forChild(),
    NbToastrModule.forRoot(),
    QnbCustomComponentsModule,
    NbCardModule,
    NbRouteTabsetModule,
    NbTabsetModule,
  ],
  declarations: [
    PagesComponent,
    QnbDashboardComponent,
  ],
})
export class PagesModule { }
