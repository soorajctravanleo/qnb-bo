import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { QnbCustomComponentsModule } from '../components/custom-components.module';

import { PagesComponent } from './pages.component';
import { QnbDashboardComponent } from './dashboard/dashboard.component';

// import { DashboardModule } from './dashboard/dashboard.module';
// import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    // DashboardModule,
    // ECommerceModule,
    // MiscellaneousModule,
    QnbCustomComponentsModule,
  ],
  declarations: [
    PagesComponent,
    QnbDashboardComponent,
  ],
})
export class PagesModule { }
