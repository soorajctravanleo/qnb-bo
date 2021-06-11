import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { QnbRoleService } from '../../../../services';
import { MockRoleData } from '../../../../_helpers/models/backend';
@Component({
  selector: 'ngx-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss'],
})
export class CreateRoleComponent implements OnInit {
  roleForm: FormGroup;
  @Input() user;
  userRoles: any;
  constructor(protected ref: NbDialogRef<CreateRoleComponent>, private roleService: QnbRoleService) { }

  ngOnInit(): void {
    this.prepareForm();
    // console.log(this.user);
    this.fetchRoles();
  }
  dismiss() {
    this.ref.close();
  }
  private fetchRoles() {
    this.roleService.fetchRoles().subscribe(res => {
      this.userRoles = res;
    });
  }
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  private prepareForm() {
    this.roleForm = new FormGroup({
      role : new FormControl(null, [Validators.required]),
      unit : new FormControl(null, [Validators.required]),
      description : new FormControl(null, [Validators.required]),
      type : new FormControl(null, [Validators.required]),
      access_to : new FormControl([], [Validators.required]),
    });
  }

  reset() { this.roleForm.reset( { access_to: [] } ); }

  onSubmit() { 
    console.log(this.roleForm);
    this.roleService.addRole(this.roleForm.value).subscribe(res => {
      console.log(res);
    })
  }
}
