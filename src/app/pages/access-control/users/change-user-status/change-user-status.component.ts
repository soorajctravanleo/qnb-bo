import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qnb-change-user-status',
  templateUrl: './change-user-status.component.html',
  styleUrls: ['./change-user-status.component.scss'],
})
export class ChangeUserStatusComponent implements OnInit {
  user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
