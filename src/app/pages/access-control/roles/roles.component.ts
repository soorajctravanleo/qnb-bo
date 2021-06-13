import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
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
  private index: number = 0;
  headElements = [
    'Role Name',
    'Role Desciption',
    'Access To',
  ];

  constructor(
    private dialogService: NbDialogService,
    private roleService: QnbRoleService,
    private toastrService: NbToastrService,
    // protected ref: NbDialogRef<DeleteRoleComponent>,
  ) { }

  ngOnInit(): void {
    this.fetchGroups();
  }
  private fetchGroups() {
    this.roleService.fetchGroups().subscribe((res) => {
      this.elements = res;
      console.log(this.elements);
    });
  }

  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `Role Deleted`,
      { position, status });
  }

  open() {
    const dialogRef = this.dialogService.open(CreateRoleComponent).onClose
      .subscribe(event => {
        if (event?.refreshList) {
          this.fetchGroups();
        }
      });
  }
  onEditUser(data) {
    // console.log(data)
    const dialogRef = this.dialogService.open(CreateRoleComponent, {
      context: { user: data },
    });
    this.roleService.updateRole(data).subscribe(_ => {
      
    })
  }

  onDeleteRole(el) {
    const dialogRef = this.dialogService.open(DeleteRoleComponent, {
      context: { groupCode: el.groupCode, groupId: el.groupId },
    })
  }

  onDelete(el){
    this.roleService.deleteRole(el).subscribe( _ => {
      this.showToast('top-right', 'success');
      // this.ref.close({ refreshList: true });
    })
  }
}
