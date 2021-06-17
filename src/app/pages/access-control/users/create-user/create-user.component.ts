import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  QueryList,
  ChangeDetectorRef,
} from '@angular/core';
import { NbDialogRef, NbSelectComponent, NbToastrService } from '@nebular/theme';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  MockUserProfileData,
  MockCountry,
  MockLanguage,
  MockTimezone,
  MockRole,
  MockUserType,
} from '../../../../_helpers/models/backend';
import {
  QnbUserService,
  QnbRoleService,
  QnbListService,
  QnbLanguage,
  QnbTimezone,
  QnbUserGroup,
  QnbUser,
} from '../../../../services';

@Component({
  selector: 'qnb-create-user',
  templateUrl: './create-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  private index: number = 0;

  editMode = false;
  countries: MockCountry[] = [];
  languages: QnbLanguage[] = [];
  timezones: QnbTimezone[] = [];
  roles: QnbUserGroup[] = [];
  userTypes: MockUserType[] = [];

  @Input() user: MockUserProfileData;
  @ViewChild('ipt', { static: true }) languageSelector: NbSelectComponent;

  constructor(
    private toastrService: NbToastrService,
    protected ref: NbDialogRef<CreateUserComponent>,
    private qnbUserService: QnbUserService,
    private qnbListService: QnbListService,
    private qnbRoleService: QnbRoleService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.prepareForm();
    this.fetchCountries();
    this.fetchLanguages();
    this.fetchTimezones();
    this.fetchRoles();
    this.fetchUserTypes();
  }

  dismiss() { this.ref.close(); }

  showToast(message, position, status, duration) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      message,
      { duration, position, status });
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

  private getFormattedDate(d: Date) {
    return `${d.getDate()}-${(d.getMonth() + 1)}-${d.getFullYear()}`;
  }

  reset() { this.signupForm.reset({ role: [] }); }

  onSubmit() {
    if (this.signupForm.valid) {
      const profile = this.signupForm.value;
      const formattedUser: QnbUser = {
        userId: profile.userId,
        firstName: profile.name,
        lastName: 'Name',
        dob: '12-1-1999',
        userStatus: profile.userStatus,
        expiryDate: this.getFormattedDate(profile.expiryDate),
        macId: 'id1',
        comment: profile.ttl,
        groups: profile.role,
      };

      if (this.editMode) {
        this.qnbUserService
          .editUser(formattedUser)
          .subscribe(res => {
            let message = 'User added successfully';
            this.showToast(message, 'top-right', 'success', 8000);
            this.ref.close({ refreshList: true });
          });
      } else {
        this.qnbUserService
          .createUser(formattedUser)
          .subscribe(res => {
            let message = 'User added to checker queue with reference number ' + res['requestId'];
            this.showToast(message, 'top-right', 'success', 8000);
            this.ref.close({ refreshList: true });
          });
      }
    } else {
      this.validateAllFormFields(this.signupForm);
    }
  }

  private fetchCountries() {
    this.qnbListService
      .getCountries()
      .subscribe(data => this.countries = data);
  }

  private fetchLanguages() {
    this.qnbListService
      .fetchLanguages()
      .subscribe(data => this.languages = data);
  }

  private fetchTimezones() {
    this.qnbListService
      .fetchTimezones()
      .subscribe(data => this.timezones = data);
  }

  private fetchRoles() {
    this.qnbRoleService
      .fetchGroups()
      .subscribe(data => this.roles = data);
  }

  private fetchUserTypes() {
    this.qnbUserService
      .fetchUserTypes()
      .subscribe(data => this.userTypes = data);
  }

  private prepareForm() {
    this.signupForm = new FormGroup({
      'userId': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'name': new FormControl(null, [Validators.required]),
      'userStatus': new FormControl('ENABLED', [Validators.required]),
      'expiryDate': new FormControl(null, [Validators.required]),
      'role': new FormControl([]),
      't_role': new FormControl([]),
      'expiry_Date': new FormControl('not mandatory', [Validators.required]),
      'ttl': new FormControl(null),
    });

    if (this.user) {
      this.editMode = true;
      this.user.expiryDate = new Date(this.user.expiryDate);
      this.signupForm.setValue(this.user);

      // <nb-select> element is not updating the view.
      // Hence, run the change detection cycle once more.
      setTimeout(() => {
        this.cdr.detectChanges();
      }, 1500);
    }
  }
}
