import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

import { QnbUserService, QnbRoleService, QnbUser } from '../../../../services';
import { MockUser } from '../../../../_helpers/models/backend';
import { CreateUserComponent } from '../create-user/create-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { ChangeUserStatusComponent } from '../change-user-status/change-user-status.component';

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
  @ViewChild('disabledEsc', { read: TemplateRef }) disabledEscTemplate: TemplateRef<HTMLElement>;
  headElements = ['User Id', 'UserName', 'Role', 'UserType', 'Expiry', 'Status'];
  users: UserTableRow[] = [];

  constructor(
    private qnbUserService: QnbUserService,
    private qnbRoleService: QnbRoleService,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  open() {
    this.dialogService
      .open(CreateUserComponent)
      .onClose
      .subscribe(event => {
        if (event?.refreshList) {
          this.fetchUsers();
        }
      });
  }

  getRole(id: number) {
    return this.qnbRoleService.getRoleById(id);
  }

  onEditUserStatus(id: any) {

    this.dialogService.open(ChangeUserStatusComponent, {
      context: { user: id },
    });
  }

  onDeleteUser(id: number) {
    this.dialogService.open(DeleteUserComponent, {
      context: { user: id },
    });

  }

  private fetchUsers() {
    this.qnbUserService
      .fetchUsers()
      .subscribe(users => {
        this.users = [];

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
