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

  headElements = ['Role Name', 'Role Desciption', 'Role Type', 'Unit', 'Access To'];


  constructor(private dialogService: NbDialogService, private roleService: QnbRoleService) {

  }

  ngOnInit(): void {
    this.fetchRoles();
  }
  private fetchRoles() {
    this.roleService
      .fetchRoles()
      .subscribe(res => {
        this.elements = res;
      });
  }

  open() {
    const dialogRef = this.dialogService.open(CreateRoleComponent, {
    });
  }
  onDeleteRole() {
    const dialogRef = this.dialogService.open(DeleteRoleComponent, {
    });
  }

}
