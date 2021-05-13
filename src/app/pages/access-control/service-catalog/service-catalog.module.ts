import { NgModule } from '@angular/core';

import { QnbCustomComponentsModule } from '../../../components/custom-components.module';

import { QnbServiceCatalogRoutingModule } from './service-catalog-routing.module';
import { QnbServiceCatalogComponent } from './service-catalog.component';

@NgModule({
  declarations: [
    QnbServiceCatalogComponent,
  ],
  imports: [
    QnbServiceCatalogRoutingModule,
    QnbCustomComponentsModule,
  ],
})
export class QnbServiceCatalogModule { }
