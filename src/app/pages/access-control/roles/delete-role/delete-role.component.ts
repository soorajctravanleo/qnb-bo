import { Component, OnInit } from '@angular/core';
import { QnbRoleService } from '../../../../services';
import { NbDialogRef, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'qnb-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.scss'],
})
export class DeleteRoleComponent implements OnInit {
  groupCode: string;
  groupId: string;
  private index:number = 0;

  constructor(
    private roleService: QnbRoleService,
    protected ref: NbDialogRef<DeleteRoleComponent>,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
  }
  onDeleteRole() {
    this.roleService.deleteRole(this.groupId).subscribe(res => {
      this.showToast('top-right', 'success');

      this.ref.close({ refreshList: true });
    });

  }

  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `Role Added`,
      { position, status });
  }

  onClose(){
    this.ref.close();
  }

  onDelete() {
    this.roleService.deleteRole(this.groupId).subscribe( _ => {
      this.showToast('top-right', 'success');
      this.ref.close({ refreshList: true });
    })
  }

}
