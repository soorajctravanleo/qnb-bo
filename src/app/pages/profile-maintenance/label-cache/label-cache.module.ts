import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { LabelCacheRoutingModule } from './label-cache-routing.module';
import { LabelCacheComponent } from './label-cache.component';
import { QnbCustomComponentsModule } from '../../../components/custom-components.module';


@NgModule({
  declarations: [
    LabelCacheComponent,
  ],
  imports: [
    CommonModule,
    LabelCacheRoutingModule,
    NbCardModule,
    NbButtonModule,
    QnbCustomComponentsModule,
  ],
})
export class LabelCacheModule { }
