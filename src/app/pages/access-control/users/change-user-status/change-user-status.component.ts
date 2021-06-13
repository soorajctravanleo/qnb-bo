import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Console } from 'console';
import { QnbUserService } from '../../../../services';

@Component({
  selector: 'qnb-change-user-status',
  templateUrl: './change-user-status.component.html',
  styleUrls: ['./change-user-status.component.scss'],
})
export class ChangeUserStatusComponent implements OnInit {
  user: any;
  comment: string;
    constructor( private userService:QnbUserService,
      protected ref: NbDialogRef<ChangeUserStatusComponent>,  ) { }

  ngOnInit(): void {
  }

  dismiss() { this.ref.close(); }

  change_status() {
    this.user.action == 'ENABLED' ? this.user.action = 'DISABLED' : this.user.action = 'ENABLED';
    this.user.comments = this.comment;
    this.userService.changeStatus(this.user).subscribe(res => {
    })
  }

}
