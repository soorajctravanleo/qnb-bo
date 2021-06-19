import { NbMenuItem } from '@nebular/theme';
import { Injectable } from '@angular/core';
import { QnbAuthService } from '../auth/auth.service';
import { rootCertificates } from 'tls';
// export const MENU_ITEMS: NbMenuItem[] = [
//   {
//     title: 'Dashboard',
//     icon: 'monitor-outline',
//     link: '/pages/dashboard',
//     home: true,
//   },
//   {
//     title: 'Access Control',
//     icon: 'people-outline',
//     children: [
//       {
//         title: 'User Management',
//         link: '/pages/access-control/users',
//       },
//       {
//         title: 'Role Managment',
//         link: '/pages/access-control/roles',
//       },
//       {
//         title: 'My Pending Requests',
//         link: '/pages/access-control/pending-requests',
//       },
//       {
//         title: 'Pending Approvals',
//         link: '/pages/access-control/pending-approvals',
//       },
//     ],
//   },
//   {
//     title: 'Transfers',
//     icon: 'flip-2-outline',
//     link: '',
//     children: [{
//       title: 'Beneficiary Authorization',
//       link: '/pages/transfers/beneficiary-authorization',
//     },
//     {
//       title: 'Transfer Maker',
//       link: '/pages/transfers/transfer-maker',
//     },
//     {
//       title: 'Transfer Checker',
//       link: '/pages/transfers/transfer-checker',
//     }, {
//       title: 'Payment Reports',
//       link: '/pages/transfers/payment-reports',
//     }],
//   },
//   {
//     title: 'Profile Maintainance',
//     icon: 'globe-outline',
//     link: '',
//     children: [{
//       title: 'Transaction Entitlement',
//       link: '/pages/profile-maintenance/transaction-entitlement',
//     },
//     {
//       title: 'Label Cache',
//       link: '/pages/profile-maintenance/label-cache',
//     }],
//   },
//   {
//     title: 'Customer 360',
//     icon: 'globe-outline',
//     link: '',
//     children: [],
//   },
//   {
//     title: 'Configuration',
//     icon: 'settings-outline',
//     link: '',
//     children: [],
//   },
//   {
//     title: 'Global Config',
//     icon: 'settings-2-outline',
//     link: '',
//     children: [],
//   },
//   {
//     title: 'IB Parameters',
//     icon: 'wifi-outline',
//     link: '',
//     children: [],
//   },
// ];
@Injectable({
  providedIn: 'root',
})
export class PageMenuService {
  // pages = [];
  constructor(private authService: QnbAuthService) {

  }
  getPages() {
    const MENU_ITEMS = [];
    MENU_ITEMS.push({
      title: 'Dashboard',
      icon: 'monitor-outline',
      link: '/pages/dashboard',
      home: true,
    });
    const ACCESS_CONTROL_MENU = {
      title: 'Access Control',
      icon: 'people-outline',
      children: [{
        title: 'User Management',
        link: '/pages/access-control/users',
      }, {
        title: 'Role Managment',
        link: '/pages/access-control/roles',
      }],
    };


    if (this.authService.hasPermission('USER_MANAGEMENT_ADD_MAKER')) {
      ACCESS_CONTROL_MENU.children.push({
        title: 'My Pending Requests',
        link: '/pages/access-control/pending-requests',
      });
    }
    if (this.authService.hasPermission('USER_MANAGEMENT_CHECKER')) {
      ACCESS_CONTROL_MENU.children.push({
        title: 'Pending Approvals',
        link: '/pages/access-control/pending-approvals',
      });
    }

    MENU_ITEMS.push(ACCESS_CONTROL_MENU);
    MENU_ITEMS.push({
      title: 'Transfers',
      icon: 'flip-2-outline',
      link: '',
      children: [{
        title: 'Beneficiary Authorization',
        link: '/pages/transfers/beneficiary-authorization',
      },
      {
        title: 'Transfer Maker',
        link: '/pages/transfers/transfer-maker',
      },
      {
        title: 'Transfer Checker',
        link: '/pages/transfers/transfer-checker',
      }, {
        title: 'Payment Reports',
        link: '/pages/transfers/payment-reports',
      }],
    },
      {
        title: 'Profile Maintainance',
        icon: 'globe-outline',
        link: '',
        children: [{
          title: 'Transaction Entitlement',
          link: '/pages/profile-maintenance/transaction-entitlement',
        },
        {
          title: 'Label Cache',
          link: '/pages/profile-maintenance/label-cache',
        }],
      },
      {
        title: 'Customer 360',
        icon: 'globe-outline',
        link: '',
        children: [],
      },
      {
        title: 'Configuration',
        icon: 'settings-outline',
        link: '',
        children: [],
      },
      {
        title: 'Global Config',
        icon: 'settings-2-outline',
        link: '',
        children: [],
      },
      {
        title: 'IB Parameters',
        icon: 'wifi-outline',
        link: '',
        children: [],
      });
    return MENU_ITEMS;
  }
}
