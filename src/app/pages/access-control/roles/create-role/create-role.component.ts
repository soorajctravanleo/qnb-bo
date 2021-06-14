import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { QnbRoleService } from '../../../../services';
import { MockRoleData } from '../../../../_helpers/models/backend';
import { QnbUserGroup, QnbEditUserGroup } from '../../../../services';
@Component({
  selector: 'ngx-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss'],
})
export class CreateRoleComponent implements OnInit {
  roleForm: FormGroup;
  editMode = false;
  userRoles = [];
  @Input() role;

  private index: number = 0;
  constructor(protected ref: NbDialogRef<CreateRoleComponent>,
    private roleService: QnbRoleService, private cdr: ChangeDetectorRef,
    private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.prepareForm();
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
      group_id: new FormControl(''),
      description: new FormControl(null, [Validators.required]),
      access_to: new FormControl([], [Validators.required]),
    });

    if (this.role) {
      this.editMode = true;
      this.roleForm.setValue({
        role: this.role.groupCode,
        description: this.role.groupDefinition,
        access_to: this.role.roles,
        group_id: this.role.groupId,
      });
      // <nb-select> element is not updating the view.
      // Hence, run the change detection cycle once more.
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 1500);
    }
  }

  reset() {
    this.roleForm.controls.access_to.setValue([]);
    this.roleForm.reset();
  }

  onSubmit() {
    if (this.roleForm.valid) {
      let formValue = this.roleForm.value;
      // let fields = this.roleForm.values;
      if (!this.editMode) {
        const formattedRole: QnbUserGroup = {
          groupCode: formValue.role,
          groupDescription: formValue.description,
          roles: formValue.access_to,
        };
        this.roleService.createRole(formattedRole).subscribe(res => {
          this.showToast('top-right', 'success');
          // this.fetchRoles();
          this.ref.close({ refreshList: true });
        });
      } else {
        const formattedRole: QnbEditUserGroup = {
          groupId: formValue.group_id,
          groupCode: formValue.role,
          groupDescription: formValue.description,
          roles: formValue.access_to,
        };
        this.roleService.updateRole(formattedRole).subscribe(res => {
          this.showToast('top-right', 'success');
          // this.fetchRoles();
          this.ref.close({ refreshList: true });
        });
      }
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
      `Role Added`,
      { position, status });
  }
}
