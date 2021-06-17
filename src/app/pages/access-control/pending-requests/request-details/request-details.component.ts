import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'qnb-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
})
export class RequestDetailsComponent implements OnInit {
  data: any;
  constructor(protected ref: NbDialogRef<RequestDetailsComponent>) { }

  ngOnInit(): void {
  }
  dismiss() { this.ref.close(); }


}
