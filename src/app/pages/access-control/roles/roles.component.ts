import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreateRoleComponent } from './create-role/create-role.component';
import { QnbRoleService } from '../../../services';
@Component({
  selector: 'qnb-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class QnbRolesComponent implements OnInit {
  elements: any;

  headElements = ['Group Code', 'Group Definition', 'Created By', 'Created At', 'Last Modified', 'Last Modified By'];


  constructor(private dialogService: NbDialogService, private QnbRoleService: QnbRoleService) {

  }

  ngOnInit(): void {
    this.fetchRoles();
  }
  private fetchRoles() {
    this.QnbRoleService
      .fetchRoles()
      .subscribe(res => {
        this.elements = res;
      });
  }

  open() {
    const dialogRef = this.dialogService.open(CreateRoleComponent, {
    });
  }


}
