import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'qnb-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
})
export class QnbSectionHeaderComponent implements OnChanges {
  @Input() title: string;
  public breadCampArray: Array<any> = [];
  ngOnChanges(changes: SimpleChanges): void {
    // debugger;
    if (typeof changes['title'] !== 'undefined') {
      if (
        typeof changes['title'].currentValue !== 'undefined' &&
        changes['title'].previousValue !== changes['title'].currentValue
      ) {
        this.breadCampArray = this.getBreadCampArray(
          changes['title'].currentValue,
        );
      }
    }
  }
  getBreadCampArray(val: string): Array<any> {
    let response: Array<any> = [];
    switch (val) {
      case 'Users':
      case 'Roles':
      case 'Pending Approvals':
      case 'Pending Requests':
        response = [
          {
            text: 'Home',
            path: '#',
          },
          {
            text: 'Access Control',
            path: '#',
          },
        ];
        response.push({
          text: this.getTitlePage(val),
          path: null,
        });
        break;
      case 'Beneficiary Authorization':
      case 'HBTF B2B Transfer Maker':
      case 'HBTF B2B Transfer Cheaker':
      case 'HBTF B2B Payments Report':
        response = [
          {
            text: 'Home',
            path: '#',
          },
          {
            text: 'Transfers',
            path: '#',
          },
        ];
        response.push({
          text: this.getTitlePage(val),
          path: null,
        });
        break;
      case 'Dashboard':
        return [{
          text: 'Home',
          path: null,
        }];
      default:
        return [];
    }

    return response;
  }
  getTitlePage(val: string): string {
    switch (val) {
      case 'Users':
        return 'User Management';
      case 'Roles':
        return 'Role Management';
      case 'Pending Requests':
        return 'My Pending Requests';
      case 'Pending Approvals':
        return 'Pending Approvals';
      case 'HBTF B2B Transfer Maker':
        return 'Transfer Maker';
      case 'HBTF B2B Transfer Cheaker':
        return 'Transfer Cheaker';
      case 'HBTF B2B Payments Report':
        return 'Payments Report';
      default:
        return val;
    }
  }
}
