import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'qnb-approval-role-details',
  templateUrl: './approval-role-details.component.html',
  styleUrls: ['./approval-role-details.component.scss'],
})
export class ApprovalRoleDetailsComponent implements OnInit {
  data: any;
  constructor(protected ref: NbDialogRef<ApprovalRoleDetailsComponent>) { }

  ngOnInit(): void {
  }
  dismiss() { this.ref.close(); }
}
