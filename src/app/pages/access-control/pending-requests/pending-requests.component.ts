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
  key = 'requestNo';
  order = 'asc';
  headElements: any = [
    {
      heading: 'Ref No.',
      key: 'requestNo',
    }, {
      heading: 'User Id',
      key: 'userId',
    }, {
      heading: 'Username',
      key: 'userName',
    },// {
    //   heading: 'Role',
    //   key: 'role',
    // },
    {
      heading: 'Expiry Date',
      key: 'expiryDate',
    },
    // }, {
    //   heading: 'Status',
    //   key: 'status',
    // }, {
    //   heading: 'Request Type',
    //   key: 'requestType',
    // },
    {
      heading: 'Requested Date',
      key: 'requestedDate',
    }, {
      heading: 'Maker Id',
      key: 'makerId',
    },
    {
      heading: 'Request Status',
      key: 'requestStatus',
    },
  ];
  roleHeadElements = ['Ref No', 'Role name', 'Description', 'Unit', 'Role Type', 'Access', 'Req Type', 'Req Date', 'Maker Id', 'Req Status'];

  roles: any = [];
  users: any = [];

  constructor(
    private dialogService: NbDialogService,
    private qnbPrService: QnbPendingRequestService,
  ) { }

  ngOnInit(): void {
    this.fetchPRRoles();
    this.fetchPRUsers();
  }

  private fetchPRRoles() {
    this.qnbPrService
      .getPendingRequestRoles()
      .subscribe(data => {
        this.roles = data;
      });
  }

  private fetchPRUsers() {
    this.qnbPrService
      .getPendingRequestUsers()
      .subscribe(data => {
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
      .onClose
      .subscribe(event => {
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
      .onClose
      .subscribe(event => {
        if (event?.refreshList) {

        }
      });

  }
}
