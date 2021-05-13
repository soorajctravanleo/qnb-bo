import { Component, Input } from '@angular/core';

@Component({
  selector: 'qnb-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class QnbSectionHeaderComponent {
  @Input() title: string;
}
