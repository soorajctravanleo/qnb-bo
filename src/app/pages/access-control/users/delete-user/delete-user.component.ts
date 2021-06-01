import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qnb-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
})
export class DeleteUserComponent implements OnInit {
  user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
