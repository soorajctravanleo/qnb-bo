import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  MockUser,
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
} from '../../../../services';

@Component({
  selector: 'qnb-create-user',
  templateUrl: './create-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  signupForm: FormGroup;
  // userTypes = ['contract', 'permanent'];
  // languages = ['Arabic', 'English', 'Spanish', 'Hindi'];
  // roles = ['Viewer', 'Admin', 'System'];
  submitted = false;

  editMode = false;
  countries: MockCountry[] = [];
  languages: MockLanguage[] = [];
  timezones: MockTimezone[] = [];
  roles: MockRole[] = [];
  userTypes: MockUserType[] = [];

  @Input() user: MockUser;

  constructor(
    protected ref: NbDialogRef<CreateUserComponent>,
    private qnbUserService: QnbUserService,
    private qnbListService: QnbListService,
    private qnbRoleService: QnbRoleService,
  ) { }

  ngOnInit() {
    this.prepareForm();
    this.fetchCountries();
    this.fetchLanguages();
    this.fetchTimezones();
    this.fetchRoles();
    this.fetchUserTypes();
  }

  dismiss() {
    this.ref.close();
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

  onSubmit() {
    if (this.signupForm.valid) {
      if (this.editMode) {
        this.qnbUserService
          .editUser(this.user.id, this.signupForm.value)
          .subscribe(res => {

          });
      } else {
        this.qnbUserService
          .createUser(this.signupForm.value)
          .subscribe(res => {

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
      .getLanguages()
      .subscribe(data => this.languages = data);
  }

  private fetchTimezones() {
    this.qnbListService
      .getTimezones()
      .subscribe(data => this.timezones = data);
  }

  private fetchRoles() {
    this.qnbRoleService
      .fetchRoles()
      .subscribe(data => this.roles = data);
  }

  private fetchUserTypes() {
    this.qnbUserService
      .fetchUserTypes()
      .subscribe(data => this.userTypes = data);
  }

  private prepareForm() {
    this.signupForm = new FormGroup({
      'profile': new FormGroup({
        'userId': new FormControl(null, [Validators.required]),
        'nickName': new FormControl(null, [Validators.required]),
        'firstName': new FormControl(null, [Validators.required]),
        'lastName': new FormControl(null, [Validators.required]),
        'dob': new FormControl(null),
        'userType': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'mobile': new FormControl(null, [Validators.required]),
        'expiryDate': new FormControl(null),
        'entity': new FormControl(null),
        'role': new FormControl([]),
        'timezone': new FormControl(null),
        'language': new FormControl([]),
        'sendPasswordOnEmail': new FormControl(null),
      }),
      'additionalInfo': new FormGroup({
        'ttl': new FormControl(null),
        'country': new FormControl(null),
        'startDate': new FormControl(null),
        'attr1': new FormControl(null),
        'attr2': new FormControl(null),
        'attr3': new FormControl(null),
        'attr4': new FormControl(null),
        'macId': new FormControl(null),
      }),
      'loginRestriction': new FormGroup({
        'userId': new FormControl(null),
        'firstName': new FormControl(null),
        'loginRestriction': new FormControl(null),
      }),
    });

    if (this.user) {
      this.editMode = true;
    }
  }
}
