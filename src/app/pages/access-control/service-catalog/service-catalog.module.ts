import { NgModule } from '@angular/core';

import { QnbServiceCatalogRoutingModule  } from './service-catalog-routing.module';
import { QnbServiceCatalogComponent } from './service-catalog.component';

@NgModule({
  declarations: [
    QnbServiceCatalogComponent
  ],
  imports: [
    QnbServiceCatalogRoutingModule
  ]
})
export class QnbServiceCatalogModule {}