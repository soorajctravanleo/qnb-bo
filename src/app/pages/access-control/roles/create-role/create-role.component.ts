import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss'],
})
export class CreateRoleComponent implements OnInit {

  constructor(protected ref: NbDialogRef<CreateRoleComponent>) { }

  ngOnInit(): void {
  }
  dismiss() {
    this.ref.close();
  }
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

}
