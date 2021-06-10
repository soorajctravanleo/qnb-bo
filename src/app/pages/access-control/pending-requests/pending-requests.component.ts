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
  headElements: any = ['Ref No.', 'User Id', 'Username', 'Role', 'Expiry Date', 'Status', 'Request Type', 'Requested Date', 'Maker Id', 'Request Status'];
  roleHeadElements = ['Ref No', 'Role name', 'Description', 'Unit', 'Role Type', 'Access', 'Req Type', 'Req Date', 'Maker Id', 'Req Status'];
  // roles = [{
  //   requestNo: 'qb12489914',
  //   roleName: 'Test1',
  //   roleDescription: 'This is a test Role',
  //   unit: 'QATAR',
  //   roleType: 'MAKER',
  //   access: 'Enabled',
  //   requestType: 'ADD',
  //   requestDate: '29/12/2020',
  //   makerId: 'UD1001',
  //   requestStatus: 'PENDING',
  // }, {
  //   requestNo: 'qb12489914',
  //   roleName: 'Test2',
  //   roleDescription: 'This is a another test',
  //   unit: 'QATAR',
  //   roleType: 'MAKER',
  //   access: 'Enabled',
  //   requestType: 'ADD',
  //   requestDate: '29/12/2020',
  //   makerId: 'UD1001',
  //   requestStatus: 'RETURNED',
  // }];
  
  // users = [{
  //   requestNo: 'qb12489912',
  //   userId: '131asp',
  //   userName: 'Mahesh',
  //   role: 'Maker',
  //   expiryDate: '29/12/2020',
  //   status: 'Enabled',
  //   requestType: 'ADD',
  //   requestedDate: '29/12/2020',
  //   makerId: 'UD1001',
  //   requestStatus: 'PENDING',
  // }, {
  //   requestNo: 'qb12489914',
  //   userId: '131asp',
  //   userName: 'Francis',
  //   role: 'Maker',
  //   expiryDate: '29/12/2020',
  //   status: 'Enabled',
  //   requestType: 'MODIFY',
  //   requestedDate: '29/12/2020',
  //   makerId: 'UD1001',
  //   requestStatus: 'RETURNED',
  // }];

  roles: MockPRRole[] = [];
  users: MockPRUser[] = [];

  constructor(
    private dialogService: NbDialogService,
    private qnbPrService: QnbPendingRequestService
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
      console.log(data)
    })
  }

  private fetchPRUsers() {
    this.qnbPrService
    .getPendingRequestUsers()
    .subscribe(data => {
      this.users = data;
      console.log(data)
    })
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
}
