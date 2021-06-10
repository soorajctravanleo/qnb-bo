import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApprovalDetailsComponent } from '../pending-approvals/approval-details/approval-details.component';
import { ApprovalRoleDetailsComponent } from '../pending-approvals/approval-role-details/approval-role-details.component';

@Component({
  selector: 'qnb-pending-approvals',
  templateUrl: './pending-approvals.component.html',
  styleUrls: ['./pending-approvals.component.scss'],
})

export class PendingApprovalsComponent implements OnInit {
  headElements: any = ['Ref No.', 'User Id', 'Username', 'Role', 'User Type', 'Expiry Date', 'Status', 'Req Type', 'Req Date', 'Maker Id', 'Maker Comments'];
  roleHeadElements = ['Ref No', 'Role Name', 'Description', 'Unit', 'Role Type', 'Access', 'Req Type', 'Req Date', 'Maker Id', 'Comments', 'Req Status'];

  roles = [{
    requestNo: 'qb12489914',
    roleName: 'Test1',
    roleDescription: 'This is a test Role',
    unit: 'QATAR',
    roleType: 'MAKER',
    access: 'Enabled',
    requestType: 'ADD',
<<<<<<< HEAD
    requestDate: '29-12-2020',
=======
    requestDate: '29/12/2020 08:20 PM',
>>>>>>> 1a5eabf918bfbf6b866a4e3bd0145bbc44f1d429
    makerId: 'UD1001',
    comments: 'test comment',
    requestStatus: 'PENDING',
  }, {
    requestNo: 'qb12489914',
    roleName: 'Test2',
    roleDescription: 'This is a another test',
    unit: 'QATAR',
    roleType: 'MAKER',
    access: 'Enabled',
    requestType: 'ADD',
<<<<<<< HEAD
    requestDate: '29-12-2020',
=======
    requestDate: '29/12/2020 08:15 PM',
>>>>>>> 1a5eabf918bfbf6b866a4e3bd0145bbc44f1d429
    makerId: 'UD1001',
    comments: 'test comment',
    requestStatus: 'PENDING',
  }];
  users = [{
    requestNo: 'qb12489912',
    userId: '131asp',
    userName: 'Mahesh',
    role: 'Maker',
    type: 'Test',
    expiryDate: '29/12/2021',
    status: 'Enabled',
    requestType: 'ADD',
<<<<<<< HEAD
    requestedDate: '29/12/2020',
=======
    requestedDate: '29/12/2020 08:15 AM',
>>>>>>> 1a5eabf918bfbf6b866a4e3bd0145bbc44f1d429
    makerId: 'UD1001',
    comments: 'test comment3',
  }, {
    requestNo: 'qb12489914',
    userId: '131asp',
    userName: 'Francis',
    role: 'Maker',
    type: 'Test',
    expiryDate: '29/12/2021',
    status: 'Enabled',
    requestType: 'MODIFY',
<<<<<<< HEAD
    requestedDate: '29/12/2020',
=======
    requestedDate: '29/12/2020 08:15 PM',
>>>>>>> 1a5eabf918bfbf6b866a4e3bd0145bbc44f1d429
    makerId: 'UD1001',
    comments: 'test comment 4',
  }];
  selectedOption = 1;
  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }
  showDetails(data) {
    this.dialogService
      .open(ApprovalDetailsComponent, {
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
      .open(ApprovalRoleDetailsComponent, {
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
