import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

import { QnbUserService, QnbRoleService, QnbUser } from '../../../../services';
import { MockUser } from '../../../../_helpers/models/backend';
import { CreateUserComponent } from '../create-user/create-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { ChangeUserStatusComponent } from '../change-user-status/change-user-status.component';

interface UserTableRow {
  userId: string;
  userType: string;
  name: string;
  email: string;
  ttl: string;
  mobile: string;
  dob: string;
  role: any;
  expiryDate: any;
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

    this.dialogService
    .open(ChangeUserStatusComponent, {
      context: { user: id },
    });
  }

  onEditUser(data) {
    this.dialogService
      .open(CreateUserComponent, {
        context: { user: data },
      })
      .onClose
      .subscribe(event => {
        if (event?.refreshList) {
          this.fetchUsers();
        }
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
          const parts = user.expiryDate.split('-');
          user.expiryDate = parts[1].concat( '-' + parts[0] + '-' , parts[2] );
          this.users.push({
            userId: user.userId,
            userType: user.userType,
            dob: user.dob,
            email: user.emailId,
            ttl: '',
            expiryDate: user.expiryDate,
            name: `${user.firstName} ${user.lastName}`.trim(),
            mobile: user.mobileNumber,
            role: user.groups,
          });
        }
      });
  }
}
