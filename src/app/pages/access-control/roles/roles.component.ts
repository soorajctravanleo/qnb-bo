import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreateRoleComponent } from './create-role/create-role.component';
import { DeleteRoleComponent } from './delete-role/delete-role.component';
import { QnbRoleService } from '../../../services';

@Component({
  selector: 'qnb-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class QnbRolesComponent implements OnInit {
  elements: any;

  headElements = [
    'Role Name',
    'Role Desciption',
    'Access To',
  ];

  constructor(
    private dialogService: NbDialogService,
    private roleService: QnbRoleService,
  ) { }

  ngOnInit(): void {
    this.fetchRoles();
  }
  private fetchRoles() {
    this.roleService.fetchRoles().subscribe((res) => {
      this.elements = res;
      // console.log(this.elements);
    });
  }

  open() {
    const dialogRef = this.dialogService.open(CreateRoleComponent);
  }
  onEditUser(data) {
    // console.log(data)
    const dialogRef = this.dialogService.open(CreateRoleComponent, {
      context: { user: data },
    });
  }
  onDeleteRole() {
    const dialogRef = this.dialogService.open(DeleteRoleComponent, {});
  }
}
