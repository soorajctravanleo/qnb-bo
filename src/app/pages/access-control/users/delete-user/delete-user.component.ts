import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { QnbUserService } from '../../../../services';

@Component({
  selector: 'qnb-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  user: any;
  comment: string;
  constructor( private userService:QnbUserService, 
    protected ref: NbDialogRef<DeleteUserComponent>, ) { }

  ngOnInit(): void {
  }

  dismiss() { this.ref.close(); }

  delete() {
    const data = {
      userId: this.user,
      comment: this.comment,
    }
    this.userService.deleteUser(data).subscribe(res => {
    })
  }

}
