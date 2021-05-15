import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'qnb-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent {


  constructor() {

  }
  elements: any = [
    {
      userId: 'Mahesh Eu1',
      nickName: 'mahesh',
      name: 'Mahesh',
      email: 'mahesheu@gmail.com',
      phone: '999090879',
      dob: '6 Oct 1986',
      role: 'Admin',
      expiryDate: '14th May 2022',
    },
    {
      userId: 'Mahesh Eu2',
      nickName: 'mahesh',
      name: 'Mahesh',
      email: 'mahesheu@gmail.com',
      phone: '999090879',
      dob: '6 Oct 1986',
      role: 'Admin',
      expiryDate: '14th May 2022',
    },
    {
      userId: 'Mahesh Eu3',
      nickName: 'mahesh',
      name: 'Mahesh',
      email: 'mahesheu@gmail.com',
      phone: '999090879',
      dob: '6 Oct 1986',
      role: 'Admin',
      expiryDate: '14th May 2022',
    },

  ];

  headElements = ['User ID', 'Nick Name', 'Name', 'Email', 'Phone', 'Dob', 'Role', 'Expiry'];



}
