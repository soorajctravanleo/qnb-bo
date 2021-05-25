import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelCacheRoutingModule } from './label-cache-routing.module';
import { LabelCacheComponent } from './label-cache.component';


@NgModule({
  declarations: [
    LabelCacheComponent,
  ],
  imports: [
    CommonModule,
    LabelCacheRoutingModule,
  ],
})
export class LabelCacheModule { }
