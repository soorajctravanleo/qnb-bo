import { Component, OnInit } from '@angular/core';
import { QnbUserService } from '../../../../services';

@Component({
  selector: 'qnb-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  user: any;
  constructor( private userService:QnbUserService ) { }

  ngOnInit(): void {
  }

  delete() {
    this.userService.deleteUser(this.user).subscribe(res => {
      console.log(res)
    })
  }

}
