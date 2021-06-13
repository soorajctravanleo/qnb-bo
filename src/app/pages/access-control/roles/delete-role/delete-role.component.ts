import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

import { QnbRoleService } from '../../../../services';

@Component({
  selector: 'qnb-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.scss'],
})
export class DeleteRoleComponent implements OnInit {
  groupCode: string;
  groupId: string;

  constructor(
    private qnbRoleService: QnbRoleService,
    protected ref: NbDialogRef<DeleteRoleComponent>,
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.ref.close();
  }

  onDelete(id: string){
    this.qnbRoleService.deleteRole(this.groupId)
    .subscribe( _ =>{
      this.groupId = id;
    } )
  }

}
