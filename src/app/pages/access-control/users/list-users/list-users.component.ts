import { Component, OnInit, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  userid: string;
  name: string;
  nickname: string;
  usertype: string;
  primaryauth: string;
  secondaryauth: string;
  expirydate: string;

}

@Component({
  selector: 'qnb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  customColumn = 'user_id';
  defaultColumns = ['name', 'nickname', 'usertype', 'primaryauth', 'secondaryauth', 'expirydate'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<any>;

  sortColumn: string = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<any>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
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
      data: { userid: '1', name: 'Mahesh EU', nickname: 'mahe', usertype: "test", primaryauth: 'LDAP', secondaryauth: 'OTP', expirydate: '14th May 2022' },
    },
    {
      data: { userid: '2', name: 'Francis', nickname: 'paanchu', usertype: "test", primaryauth: 'LDAP', secondaryauth: 'security question', expirydate: '16th May 2022' },
    },
    {
      data: { userid: '3', name: 'Bimal', nickname: 'pappan', usertype: "test", primaryauth: 'LDAP', secondaryauth: 'security question', expirydate: '18th May 2022' },
    },
  ];
}