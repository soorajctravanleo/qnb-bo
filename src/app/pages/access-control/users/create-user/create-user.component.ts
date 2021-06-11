import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  QueryList,
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
  // userTypes = ['contract', 'permanent'];
  // languages = ['Arabic', 'English', 'Spanish', 'Hindi'];
  // roles = ['Viewer', 'Admin', 'System'];
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
  ) {
    
   }

  ngOnInit() {
    console.log(this.user);
    this.prepareForm();
    this.fetchCountries();
    this.fetchLanguages();
    this.fetchTimezones();
    this.fetchRoles();
    this.fetchUserTypes()
   
  }

  dismiss() {
    this.ref.close();
    console.log(this.signupForm);
    
    
  }
  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `User Added`,
      { position, status });
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

  reset(){
    // this.signupForm.value['role']=[]
    console.log(this.signupForm);
    this.signupForm.reset({role:[]})
    console.log(this.signupForm);
    
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { profile, additionalInfo, loginRestriction } = this.signupForm.value;
      const formattedUser: QnbUser = {
        userId: profile.userId,
        nickName: profile.nickName,
        firstName: profile.firstName,
        lastName: profile.lastName,
        dob: this.getFormattedDate(profile.dob),
        mobileNumber: profile.mobile,
        userType: profile.userType,
        // userStatus: 'OPEN',
        bankSubType: 'SUB',
        corporateId: 'CORP1',
        entity: profile.entity,
        expiryDate: this.getFormattedDate(profile.expiryDate),
        timeZoneId: profile.timezone,
        language: profile.language,
        emailId: profile.email,
        sendPwdOnEmail: profile.sendPasswordOnEmail,
        userBranchCode: '-',
        authTypePrimary: 'LDAP',
        authTypeSecondary: 'DATABASE',
        optAuthTypePrimary: 'optAuthTypeP',
        optAuthTypeSecondary: 'ptAuthTypeS',
        authTypeAttribute: 'authTypeA',
        macId: additionalInfo.macId,
        authApplyDayTimeBasedLogin: true,
        groups: profile.role,
      };

      if (this.editMode) {
        // this.qnbUserService
        //   .editUser(this.user.id, this.signupForm.value)
        //   .subscribe(res => {

        //   });
      } else {
        this.qnbUserService
          .createUser(formattedUser)
          .subscribe(res => {
            this.showToast('top-right', 'success');
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
      // 'profile': new FormGroup({
        'userId': new FormControl(null, [Validators.required, Validators.minLength(5)]),
        'nickName': new FormControl(null, [Validators.required]),
        // 'firstName': new FormControl(null, [Validators.required]),
        'name': new FormControl(null, [Validators.required]),
        'dob': new FormControl(null, [Validators.required]),
        'userType': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'mobile': new FormControl(null, [Validators.required]),
        'expiryDate': new FormControl(null, [Validators.required]),
        'role': new FormControl([]),
        'expiry_Date': new FormControl(null, [Validators.required]),
        'ttl': new FormControl(null),
        // 'entity': new FormControl(null, [Validators.required]),
        // 'timezone': new FormControl(null),
        // 'language': new FormControl(null, [Validators.required]),
        // 'sendPasswordOnEmail': new FormControl(false),

      // }),
      // 'additionalInfo': new FormGroup({
      //   'ttl': new FormControl(null),
      //   'country': new FormControl(null),
      //   'startDate': new FormControl(null),
      //   'attr1': new FormControl(null),
      //   'attr2': new FormControl(null),
      //   'attr3': new FormControl(null),
      //   'attr4': new FormControl(null),
      //   'macId': new FormControl('-'),
      // }),
      // 'loginRestriction': new FormGroup({
      //   'userId': new FormControl(null),
      //   'firstName': new FormControl(null),
      //   'loginRestriction': new FormControl(null),
      // }),
    });

    if (this.user) {
      this.editMode = true;
      // if(typeof(this.user.role)=='string'){
      // this.user.role=this.user.role.split(', ');
      // }
      this.user.expiry_Date=new Date(this.user.expiryDate)
      this.signupForm.setValue(this.user);
      
    }
  }
}
