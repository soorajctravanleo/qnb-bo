import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { QnbSectionHeaderComponent } from './section-header/section-header.component';

const COMPONENTS = [
  QnbSectionHeaderComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
  imports:[
    CommonModule
  ]
})
export class QnbCustomComponentsModule {}
