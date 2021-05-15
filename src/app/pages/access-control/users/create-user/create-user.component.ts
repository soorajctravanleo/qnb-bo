import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { QnbUserService } from '../../../../services/user.service';
@Component({
  selector: 'qnb-create-user',
  templateUrl: './create-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  signupForm: FormGroup;
  userTypes = ['contract', 'permanent'];
  languages = ['Arabic', 'English', 'Spanish', 'Hindi'];
  roles = ['Viewer', 'Admin', 'System'];


  submitted = false;
  constructor(protected ref: NbDialogRef<CreateUserComponent>, protected userService: QnbUserService) {


  }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      'userData': new FormGroup({
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
        'timeZone': new FormControl(null),
        'language': new FormControl([]),
        'sendPassword': new FormControl(null),

      }),
      'additionalInfo': new FormGroup({
        'ttl': new FormControl(null),
        'nickName2': new FormControl(null),
        'firstName2': new FormControl(null),
        'attribute1': new FormControl(null),
        'attribute2': new FormControl(null),
        'attribute3': new FormControl(null),
        'attribute4': new FormControl(null),
        'macId': new FormControl(null),

      }),
      'loginRestriction': new FormGroup({
        'userId': new FormControl(null),
        'firstName': new FormControl(null),
        'loginRestriction': new FormControl(null),

      }),

    });

  }

  dismiss() {
    this.ref.close();
  }
  onSubmit() {

    if (this.signupForm.valid) {
      this.userService.createUser(this.signupForm.value).subscribe(res => {

      });

      console.log(this.signupForm.value);
    } else {
      this.validateAllFormFields(this.signupForm); //{7}
    }
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });

  }
}
