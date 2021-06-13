import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qnb-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.scss'],
})
export class DeleteRoleComponent implements OnInit {
  groupCode: string;
  groupId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
