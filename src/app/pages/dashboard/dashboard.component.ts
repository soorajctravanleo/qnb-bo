import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { QnbPendingApprovalService, QnbPendingRequestService } from '../../services';
import { ApprovalDetailsComponent } from '../access-control/pending-approvals/approval-details/approval-details.component';
import { RequestDetailsComponent } from '../access-control/pending-requests/request-details/request-details.component';
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class QnbDashboardComponent implements OnInit {
  userids = [];
  roles = [];
  users = [];

  constructor(
    private pending_approval_service: QnbPendingApprovalService,
    private pendingRequestService: QnbPendingRequestService,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {
    this.getpendingworkflows();
    this.getPendingRequests();
  }
  getPendingRequests() {
    this.pendingRequestService.getPendingRequestUsers()
      .subscribe(data => {
        this.users = data;
      });
  }
  getpendingworkflows() {
    this.pending_approval_service.getPendingRequestUsers().subscribe((res: any) => {
      this.users = res;
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
          this.getpendingworkflows();
        }
      });
  }
  showPendingDetails(data) {
    this.dialogService
      .open(RequestDetailsComponent, {
        context: {
          data: data,
        },
      })
      .onClose.subscribe((event) => {
        if (event?.refreshList) {
          this.getPendingRequests();
        }
      });
  }
}
