import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

import { QnbUserService } from '../../../../services/user.service';
import { QnbRoleService } from '../../../../services/role.service';
import { MockUser } from '../../../../_helpers/models/backend';
import { CreateUserComponent } from '../create-user/create-user.component';

interface UserTableRow {
  id: number;
  userId: number;
  nickName: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  role: number;
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
    this.qnbUserService
      .fetchUser(id)
      .subscribe(user => {
        this.dialogService.open(CreateUserComponent, {
          context: { user },
        });
      });
  }

  onDeleteUser(id: number) {

  }

  private fetchUsers() {
    this.qnbUserService
      .fetchUsers()
      .subscribe(users => {
        for (const user of users) {
          const { profile } = user.data;

          this.users.push({
            id: user.id,
            userId: profile.userId,
            dob: profile.dob,
            email: profile.email,
            expiryDate: profile.expiryDate,
            name: `${profile.firstName} ${profile.lastName}`.trim(),
            nickName: profile.nickName,
            phone: profile.mobile,
            role: profile.role,
          });
        }
      });
  }
}
