import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

import { QnbPendingRequestService } from '../../../services';
import { MockPRRole, MockPRUser } from '../../../_helpers/models/backend';

import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestRoleDetailsComponent } from './request-role-details/request-role-details.component';

@Component({
  selector: 'qnb-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.scss'],
})
export class PendingRequestsComponent implements OnInit {
  public filterObj: any = {
    key: 'requestNo',
    type: 'string',
    filter: 'asc',
  };
  headElements: any = [
    {
      heading: 'Ref No.',
      key: 'requestId',
      type: 'string',
    },
    {
      heading: 'User Id',
      key: 'userId',
      type: 'string',
    },
    {
      heading: 'Username',
      key: 'firstName',
      type: 'string',
    },
    // {
    //   heading: 'Role',
    //   key: 'role',
    //   type: 'string',
    // },
    {
      heading: 'Expiry Date',
      key: 'expiryDate',
      type: 'date',
    },
    // {
    //   heading: 'Status',
    //   key: 'status',
    //   type: 'string',
    // },
    // {
    //   heading: 'Request Type',
    //   key: 'requestType',
    //   type: 'string',
    // },
    {
      heading: 'Requested Date',
      key: 'createdTime',
      type: 'dateTime',
    },
    {
      heading: 'Maker Id',
      key: 'createdBy',
      type: 'string',
    },
    {
      heading: 'Request Status',
      key: 'workflowStatus',
      type: 'string',
    },
  ];
  roleHeadElements = [
    'Ref No',
    'Role name',
    'Description',
    'Unit',
    'Role Type',
    'Access',
    'Req Type',
    'Req Date',
    'Maker Id',
    'Req Status',
  ];

  roles: any = [];
  users: any = [];

  constructor(
    private dialogService: NbDialogService,
    private qnbPrService: QnbPendingRequestService,
  ) {}

  ngOnInit(): void {
    this.fetchPRRoles();
    this.fetchPRUsers();
  }

  private fetchPRRoles() {
    this.qnbPrService.getPendingRequestRoles().subscribe((data) => {
      this.roles = data;
    });
  }

  private fetchPRUsers() {
    this.qnbPrService.getPendingRequestUsers().subscribe((data) => {
      this.users = data;
    });
  }

  openRoleDetails(data) {
    this.dialogService
      .open(RequestRoleDetailsComponent, {
        context: {
          data: data,
        },
      })
      .onClose.subscribe((event) => {
        if (event?.refreshList) {
        }
      });
  }

  openDetails(data) {
    this.dialogService
      .open(RequestDetailsComponent, {
        context: {
          data: data,
        },
      })
      .onClose.subscribe((event) => {
        if (event?.refreshList) {
        }
      });
  }

  filterChange(item: any) {
    this.filterObj = {
      key: item.key,
      type: item.type,
      filter:
        this.filterObj.key === item.key
          ? this.filterObj.filter === 'asc'
            ? 'desc'
            : 'asc'
          : 'asc',
    };
  }
}
