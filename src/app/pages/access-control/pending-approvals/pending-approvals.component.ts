import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ApprovalDetailsComponent } from '../pending-approvals/approval-details/approval-details.component';
import { ApprovalRoleDetailsComponent } from '../pending-approvals/approval-role-details/approval-role-details.component';
import { QnbPendingApprovalService } from '../../../services';

@Component({
  selector: 'qnb-pending-approvals',
  templateUrl: './pending-approvals.component.html',
  styleUrls: ['./pending-approvals.component.scss'],
})
export class PendingApprovalsComponent implements OnInit {
  headElements: any = [
    'Ref No.',
    'User Id',
    'Username',
    'Role',
    'User Type',
    'Expiry Date',
    'Status',
    'Req Type',
    'Req Date',
    'Maker Id',
    'Maker Comments',
  ];
  roleHeadElements = [
    'Ref No',
    'Role Name',
    'Description',
    'Unit',
    'Role Type',
    'Access',
    'Req Type',
    'Req Date',
    'Maker Id',
    'Comments',
    'Req Status',
  ];
  userids=[]
  roles = [];
  users = [];
  selectedOption = 1;
  constructor(
    private dialogService: NbDialogService,
    private pending_approval_service: QnbPendingApprovalService,
  ) {}

  ngOnInit(): void {
    this.GetPendingRoles();
    this.Getpendingworkflows();
  }

  Getpendingworkflows() {
    this.userids = [];
    this.pending_approval_service.getPendingWorkflows().subscribe((res: any) => {
      res.map(t => {
        this.userids.push(t.requestId)
      });
    }).add(() => {
      const data = { requestIds: this.userids }
      this.pending_approval_service.fetchPendingUsers(data).subscribe(res => {
        this.users = res;
      });
    });
  }

  GetPendingRoles() {
    this.pending_approval_service.fetchPendingRoles().subscribe((res: any) => {
      this.roles = res;
    });
  }

  showDetails(data) {
    this.dialogService
      .open(ApprovalDetailsComponent, {
        context: {
          data: data,
        },
      })
      .onClose.subscribe((event) => {
        if (event?.refreshList) {
          this.Getpendingworkflows();
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
      .onClose.subscribe((event) => {
        if (event?.refreshList) {
        }
      });
  }
}
