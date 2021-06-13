import { Component, OnInit } from '@angular/core';

import { QnbUserService } from '../../../../services';

@Component({
  selector: 'qnb-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  user: any;
  comment: string;
  constructor(
    private userService: QnbUserService,
  ) { }

  ngOnInit(): void {
  }

  delete() {
    const data = {
      userId: this.user,
      comment: this.comment,
    };
    this.userService.deleteUser(data).subscribe(res => {
    });
  }
}
