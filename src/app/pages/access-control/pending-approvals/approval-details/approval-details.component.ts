import { Component, OnInit } from '@angular/core';
import { QnbPendingApprovalService } from '../../../../services';

@Component({
  selector: 'qnb-approval-details',
  templateUrl: './approval-details.component.html',
  styleUrls: ['./approval-details.component.scss'],
})
export class ApprovalDetailsComponent implements OnInit {
  data: any;
  constructor( private pendingapprovalservice: QnbPendingApprovalService, ) { }

  ngOnInit(): void {

  }

  approve() {
    const data = {
      workflowId: this.data.requestId,
    };
    this.pendingapprovalservice.approveUser(data).subscribe(res => {
    });
  }

  return() {}

  decline() {}

}
