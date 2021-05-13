import { Component, NgModule } from '@angular/core';

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
})
export class QnbCustomComponentsModule {}
