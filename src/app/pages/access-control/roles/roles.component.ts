import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreateRoleComponent } from './create-role/create-role.component';

@Component({
  selector: 'qnb-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class QnbRolesComponent implements OnInit {
  elements: any = [
    {
      role_name: 'Viewer',
      description: 'Viewer has only view access',
      multi_login: 'No',
      nok_login: 'Yes',
      decent_login: 'Yes',
      no_password_expiry: 'Yes',
      created_date: '13th May'
    },
    {
      role_name: 'Admin',
      description: 'Viewer has edit permissions',
      multi_login: 'No',
      nok_login: 'Yes',
      decent_login: 'Yes',
      no_password_expiry: 'Yes',
      created_date: 'No'
    },
    {
      role_name: 'System',
      description: 'system has all previlages',
      multi_login: 'No',
      nok_login: 'Yes',
      decent_login: 'Yes',
      no_password_expiry: 'Yes',
      created_date: 'No'
    },

  ];

  headElements = ['Role Name', 'Description', 'Multi Login', 'Nok Login', 'Decent Login', 'No Password Expiry', 'Created Date'];


  constructor(private dialogService: NbDialogService) {

  }

  ngOnInit(): void {

  }


  open() {
    const dialogRef = this.dialogService.open(CreateRoleComponent, {
    });
  }


}
