import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { QnbRoleService } from '../../../../services';
@Component({
  selector: 'ngx-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss'],
})
export class CreateRoleComponent implements OnInit {
  userRoles: any;
  constructor(protected ref: NbDialogRef<CreateRoleComponent>, private roleService: QnbRoleService) { }

  ngOnInit(): void {
    this.fetchRoles();
  }
  dismiss() {
    this.ref.close();
  }
  private fetchRoles() {
    this.roleService.fetchRoles().subscribe(res => {
      this.userRoles = res;
    });
  }
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

}
