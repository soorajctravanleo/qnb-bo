import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qnb-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.scss']
})
export class PendingRequestsComponent implements OnInit {
  headElements: any = ["Request No.", "Type", "Access Level", "Role/userid", "Entity", "Application Type", "Maker Id", "Maker Date"];
  users = [];
  constructor() { }

  ngOnInit(): void {
  }

}
