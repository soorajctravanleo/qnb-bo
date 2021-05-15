import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'qnb-create-user',
  templateUrl: './create-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  @ViewChild('f', { static: false }) userForm: NgForm;

  userTypes = ['contract', 'permanent'];
  languages = ['Arabic', 'English', 'Spanish', 'Hindi'];
  roles = ['Viewer', 'Admin', 'System'];

  user = {
    userId: '',
    nickName: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    mobile: '',
  };
  submitted = false;
  constructor(protected ref: NbDialogRef<CreateUserComponent>) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }
  onSubmit() {
    this.submitted = true;
    this.userForm.reset();
  }

}
