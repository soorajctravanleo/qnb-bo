import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { QnbPendingApprovalService } from '../../services';
import { ApprovalDetailsComponent } from '../access-control/pending-approvals/approval-details/approval-details.component';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class QnbDashboardComponent implements OnInit {
  userids = [];
  roles = [];
  users = [];

  constructor(private pending_approval_service: QnbPendingApprovalService,
    private dialogService: NbDialogService,
  ) {}

ngOnInit(): void {
  this.Getpendingworkflows();
}

Getpendingworkflows() {
  this.userids = [];
  this.pending_approval_service.getPendingWorkflows().subscribe((res: any) => {
    res.map(t => {
      this.userids.push(t.requestId);
    });
  }).add(() => {
    const data = { requestIds: this.userids };
    this.pending_approval_service.fetchPendingUsers(data).subscribe(res => {
      this.users = res;
    });
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

}
