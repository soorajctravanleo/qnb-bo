import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { QnbPendingApprovalService } from '../../../../services';

@Component({
  selector: 'qnb-approval-details',
  templateUrl: './approval-details.component.html',
  styleUrls: ['./approval-details.component.scss'],
})
export class ApprovalDetailsComponent implements OnInit {
  private index: number = 0;
  data: any;
  comment: string;
  constructor( private pendingapprovalservice: QnbPendingApprovalService,
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<ApprovalDetailsComponent>,
     ) { }

  ngOnInit(): void { console.log(this.data)
  }

  showToast(position, status, action) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `User ${action}`,
      { position, status });
  }

  approve(action: string) {
    const data = {
      workflowId: this.data.workflowId,
      checkerComments: this.comment,
      workflowAction: action,
    };
    this.pendingapprovalservice.approveUser(data).subscribe(res => {
      this.showToast('top-right', 'success', action);
      this.ref.close({ refreshList: true });
    });
  }

  return() {}

}
