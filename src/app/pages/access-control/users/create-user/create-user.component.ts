import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbIconConfig } from '@nebular/theme';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'qnb-create-user',
  templateUrl: './create-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(protected ref: NbDialogRef<CreateUserComponent>) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }

}
