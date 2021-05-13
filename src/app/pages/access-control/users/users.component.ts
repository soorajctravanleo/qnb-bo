import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class QnbUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("i am here");
  }

}
