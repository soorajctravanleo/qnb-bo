import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { QnbUserService } from '../../../../services';

@Component({
  selector: 'qnb-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  private index: number = 0;
  user: any;
  comment: string;
  constructor( private userService: QnbUserService,
  private toastrService: NbToastrService,
  protected ref: NbDialogRef<DeleteUserComponent>) { }

  ngOnInit(): void {
  }

  dismiss() { this.ref.close(); }

  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `User Terminated`,
      { position, status });
  }

  delete() {
    const data = {
      userId: this.user,
      status: 'terminated',
      comment: this.comment,
    };
    this.userService.deleteUser(data).subscribe(res => {
      this.showToast('top-right', 'success');
      this.ref.close({ refreshList: true });
    });
  }

}
