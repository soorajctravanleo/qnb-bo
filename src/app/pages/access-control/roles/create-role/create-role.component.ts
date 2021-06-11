import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NbDialogRef } from "@nebular/theme";
import { QnbRoleService } from "../../../../services";
import { MmockRole, MockRoleData } from "../../../../_helpers/models/backend";
@Component({
  selector: "ngx-create-role",
  templateUrl: "./create-role.component.html",
  styleUrls: ["./create-role.component.scss"],
})
export class CreateRoleComponent implements OnInit {
  roleForm: FormGroup;
  editMode = false;
  @Input() user:MmockRole;
  userRoles: any;
  constructor(
    protected ref: NbDialogRef<CreateRoleComponent>,
    private roleService: QnbRoleService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.prepareForm();
    console.log(this.user);
    this.fetchRoles();
  }
  dismiss() {
    this.ref.close();
  }
  private fetchRoles() {
    this.roleService.fetchRoles().subscribe((res) => {
      this.userRoles = res;
    });
  }
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  private prepareForm() {
    this.roleForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
      unit: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      access_to: new FormControl([], [Validators.required]),
    });

    if (this.user) {
      this.editMode = true;
      this.roleForm.setValue(this.user);

      // <nb-select> element is not updating the view.
      // Hence, run the change detection cycle once more.
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 1500);
    }
  }

  reset() {
    this.roleForm.reset({ access_to: [] });
  }

  onSubmit() {
    console.log(this.roleForm);
    this.roleService.addRole(this.roleForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
