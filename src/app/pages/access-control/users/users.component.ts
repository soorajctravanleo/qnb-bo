import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreateUserComponent } from './create-user/create-user.component';


@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class QnbUsersComponent implements OnInit {
  @ViewChild('disabledEsc', { read: TemplateRef }) disabledEscTemplate: TemplateRef<HTMLElement>;
  data: Array<any>;


  constructor(private dialogService: NbDialogService) {
    

  }

  ngOnInit(): void {

  }
  open() {
    this.dialogService.open(CreateUserComponent, {
    });
  }




}
