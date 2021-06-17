import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
@Component({
  selector: 'qnb-request-role-details',
  templateUrl: './request-role-details.component.html',
  styleUrls: ['./request-role-details.component.scss'],
})
export class RequestRoleDetailsComponent implements OnInit {
  data: any;
  constructor(protected ref: NbDialogRef<RequestRoleDetailsComponent>) { }

  ngOnInit(): void {
  }
  dismiss() { this.ref.close(); }

}
