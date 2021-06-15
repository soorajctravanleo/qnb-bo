import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Console } from 'console';
import { QnbUserService } from '../../../../services';

@Component({
  selector: 'qnb-change-user-status',
  templateUrl: './change-user-status.component.html',
  styleUrls: ['./change-user-status.component.scss'],
})
export class ChangeUserStatusComponent implements OnInit {
  private index: number = 0;
  user: any;
  comment: string;
    constructor( private userService: QnbUserService,
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<ChangeUserStatusComponent>) { }

  ngOnInit(): void {
  }

  dismiss() { this.ref.close(); }

  showToast(position, status, action) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `User Status ${action}`,
      { position, status });
  }

  change_status() {
    this.user.status === 'ENABLED' ? this.user.status = 'DISABLED' : this.user.status = 'ENABLED';
    this.user.comments = this.comment;
    this.userService.changeStatus(this.user).subscribe(res => {
      this.showToast('top-right', 'success', this.user.action);
      this.ref.close({ refreshList: true });
    });
  }

}
