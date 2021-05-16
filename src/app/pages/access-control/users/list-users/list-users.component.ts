import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

import { QnbUserService, QnbRoleService, QnbUser } from '../../../../services';
import { MockUser } from '../../../../_helpers/models/backend';
import { CreateUserComponent } from '../create-user/create-user.component';

interface UserTableRow {
  userId: string;
  nickName: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  role: string;
  expiryDate: string;
}

@Component({
  selector: 'qnb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  headElements = ['User ID', 'Nick Name', 'Name', 'Email', 'Phone', 'Dob', 'Role', 'Expiry'];
  users: UserTableRow[] = [];

  constructor(
    private qnbUserService: QnbUserService,
    private qnbRoleService: QnbRoleService,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  getRole(id: number) {
    return this.qnbRoleService.getRoleById(id);
  }

  onEditUser(id: number) {
    // this.qnbUserService
    //   .fetchUser(id)
    //   .subscribe(user => {
    //     this.dialogService.open(CreateUserComponent, {
    //       context: { user },
    //     });
    //   });
  }

  onDeleteUser(id: number) {

  }

  private fetchUsers() {
    this.qnbUserService
      .fetchUsers()
      .subscribe(users => {
        for (const user of users) {
          this.users.push({
            userId: user.userId,
            dob: user.dob,
            email: user.emailId,
            expiryDate: user.expiryDate,
            name: `${user.firstName} ${user.lastName}`.trim(),
            nickName: user.nickName,
            phone: user.mobileNumber,
            role: user.groups.join(', '),
          });
        }
      });
  }
}
