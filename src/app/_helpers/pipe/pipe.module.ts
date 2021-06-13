import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSortPipe } from './table-sort/table-sort.pipe';

@NgModule({
  declarations: [TableSortPipe],
  imports: [CommonModule],
  exports: [TableSortPipe],
})
export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
