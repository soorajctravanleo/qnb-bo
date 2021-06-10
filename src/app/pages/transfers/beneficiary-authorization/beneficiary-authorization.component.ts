import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

import { BeneficiaryAuthorizationDetailsComponent } from './beneficiary-authorization-details/beneficiary-authorization-details.component';
import { QnbBeneficiaryAuthorizationService } from '../../../services/beneficiary-authorization.service';
import { MockBeneficiaryAuthorization } from '../../../_helpers/models/backend';

@Component({
  selector: 'qnb-beneficiary-authorization',
  templateUrl: './beneficiary-authorization.component.html',
  styleUrls: ['./beneficiary-authorization.component.scss'],
})
export class BeneficiaryAuthorizationComponent implements OnInit {
  headElements: any = ['Request Date', 'Customer Name', 'Transaction Name', 'Unit', 'Profile', 'Last Viewed By', 'Last Viewed Date/Time', 'Channel Name'];

  beneficiaryAuths: MockBeneficiaryAuthorization[] = [];

  constructor(
    private qnbBeneficiaryAuthService: QnbBeneficiaryAuthorizationService,
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {
    this.fetchBeneficiaryAuth();
  }

  private fetchBeneficiaryAuth() {
    this.qnbBeneficiaryAuthService
    .getBeneficiaryAuths()
    .subscribe(data => {
      this.beneficiaryAuths = data;
    });
  }

  openBeneficiaryAuthDetails(data) {
    this.dialogService
    .open(BeneficiaryAuthorizationDetailsComponent, {
      context: {
        data: data,
      },
    })
    .onClose
    .subscribe(event => {
      if (event?.refreshList) {

      }
    });
  }

}
