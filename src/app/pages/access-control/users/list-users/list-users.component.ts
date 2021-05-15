import { Component, OnInit } from '@angular/core';

import { QnbUserService } from '../../../../services/user.service';
import { QnbRoleService } from '../../../../services/role.service';

interface UserTableRow {
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
  elements: UserTableRow[] = [];

  constructor(
    private qnbUserService: QnbUserService,
    private qnbRoleService: QnbRoleService,
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  getRole(id: number) {
    return this.qnbRoleService.getRoleById(id);
  }

  private fetchUsers() {
    this.qnbUserService
      .fetchUsers()
      .subscribe(users => {
        for (const user of users) {
          const { profile } = user.data;
          this.elements.push({
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
