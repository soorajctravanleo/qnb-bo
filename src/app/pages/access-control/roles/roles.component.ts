import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  role_name: string;
  description: string;
  status: string;
  multi_login: string;
  no_password_expiry: string;
  maker_id: string;
  maker_date: string;
}

@Component({
  selector: 'qnb-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class QnbRolesComponent implements OnInit {

  customColumn = 'role_name';
  defaultColumns = ['description', 'status', 'multi_login', 'no_password_expiry', 'maker_id', 'maker_date'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<any>;

  sortColumn: string = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  ngOnInit(): void {
  }

  changeSort(sortRequest: NbSortRequest): void {
    this.dataSource.sort(sortRequest);
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getDirection(column: string): NbSortDirection {
    if (column === this.sortColumn) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: {
        role_name: 'system',
        description: 'system has access to all menus and features',
        status: 'ACTIVE',
        multi_login: 'YES',
        no_password_expiry: 'YES',
        maker_id: 'Francis',
        maker_date: '14th May 2022',
      },
    },
    {
      data: {
        role_name: 'admin',
        description: 'admin has limited access to all features',
        status: 'ACTIVE',
        multi_login: 'YES',
        no_password_expiry: 'NO',
        maker_id: 'Francis',
        maker_date: '16th May 2022',
      },
    },
    {
      data: {
        role_name: 'viewer',
        description: 'viewer has access only readonly access',
        status: 'ACTIVE',
        multi_login: 'YES',
        no_password_expiry: 'NO',
        maker_id: 'Francis',
        maker_date: '18th May 2022',
      },
    },
  ];
}
