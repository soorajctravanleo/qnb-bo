import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { QnbRoleService } from '../../../../services';
import { MockRoleData } from '../../../../_helpers/models/backend';
import { QnbUserGroup } from '../../../../services';
@Component({
  selector: 'ngx-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss'],
})
export class CreateRoleComponent implements OnInit {
  roleForm: FormGroup;
  @Input() user;
  private index: number = 0;
  userRoles: any;
  constructor(protected ref: NbDialogRef<CreateRoleComponent>,
    private roleService: QnbRoleService,
    private toastrService: NbToastrService) { }

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
      role: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      access_to: new FormControl([], [Validators.required]),
    });
  }

  reset() {
    this.roleForm.controls.access_to.setValue([]);
    this.roleForm.reset();
  }

  onSubmit() {
    if (this.roleForm.valid) {
      let formValue = this.roleForm.value;

      // let fields = this.roleForm.values;
      const formattedRole: QnbUserGroup = {
        groupCode: formValue.role,
        groupDescription: formValue.description,
        roles: formValue.access_to,
      }
      this.roleService.createRole(formattedRole).subscribe(res => {
        this.showToast('top-right', 'success');
      });
    } else {
      this.validateAllFormFields(this.roleForm);
    }
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `User Added`,
      { position, status });
  }
}
