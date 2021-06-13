import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { QnbUserService } from '../../../../services';

@Component({
  selector: 'qnb-change-user-status',
  templateUrl: './change-user-status.component.html',
  styleUrls: ['./change-user-status.component.scss'],
})
export class ChangeUserStatusComponent implements OnInit {
  user: any;
  constructor( private userService:QnbUserService ) { }

  ngOnInit(): void {
  }

  change_status() {
    this.user.action == 'ENABLED' ? this.user.action = 'DISABLED' : this.user.action = 'ENABLED';
    this.userService.changeStatus(this.user).subscribe(res=> {
      console.log(res)
    })
  }

}
