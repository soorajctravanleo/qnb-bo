import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';

import { QnbRoleService } from '../../../../services';

@Component({
  selector: 'qnb-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.scss'],
})
export class DeleteRoleComponent implements OnInit {
  private index: number = 0;

  groupCode: string;
  groupId: string;

  constructor(
    private qnbRoleService: QnbRoleService,
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<DeleteRoleComponent>,
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.ref.close();
  }

  onDelete(id: any){
    this.qnbRoleService.deleteRole(id)
    .subscribe( _ => {
      this.showToast('top-right', 'success');
      this.groupId = id;
    })
  }

  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `Role Deleted`,
      { position, status });
  }

}
