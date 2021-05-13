import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';

import { QnbServiceCatalogRoutingModule } from './service-catalog-routing.module';
import { QnbServiceCatalogComponent } from './service-catalog.component';

@NgModule({
  declarations: [
    QnbServiceCatalogComponent,
  ],
  imports: [
    QnbServiceCatalogRoutingModule,
    ThemeModule,
  ],
})
export class QnbServiceCatalogModule { }
