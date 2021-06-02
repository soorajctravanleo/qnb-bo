import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { QnbUnitService } from '../../../services';
import {
  MockUnit,
  // MockUnitModule,
  MockAccountsTransactionDesc,
  MockChequesTransactionDesc,
  MockContactBankTransactionDesc,
  MockIPOTransactionDesc,
} from '../../../_helpers/models/backend';

@Component({
  selector: 'qnb-transaction-entitlement',
  templateUrl: './transaction-entitlement.component.html',
  styleUrls: ['./transaction-entitlement.component.scss'],
})
export class TransactionEntitlementComponent implements OnInit {
  transactionEntitlement: FormGroup;
  headElements = ['Model Name', 'Transaction Description'];
  units: MockUnit[] = [];
  // moduleNames: MockUnitModule[] = [];
  accountTransactionDescs: MockAccountsTransactionDesc[] = [];
  chequeTransactionDescs: MockChequesTransactionDesc[] = [];
  contactBankTransactionDescs: MockContactBankTransactionDesc[] = [];
  ipoTransactionDescs: MockIPOTransactionDesc[] = [];

  showMsg:boolean = false

  constructor(
    private fb: FormBuilder,
    private qnbUnitService: QnbUnitService,
  ) { }

  ngOnInit(): void {
    this.transactionEntitlementForm();
    this.fetchUnits();
    this.fetchAccountTransactionDescs();
    this.fetchChequesTransactionDescs();
    this.fetchContactBankTransactionDescs();
    this.fetchIPOTransactionDescs();
  }

  onSubmit() {
    if (this.transactionEntitlement.valid) {
      this.showMsg= true;
    }
  }

  onClear() {
    if (this.transactionEntitlement.valid) {
      this.transactionEntitlement.reset();
    }
  }

  private fetchUnits() {
    this.qnbUnitService
    .getUnits()
    .subscribe( data => {
      this.units = data;
    });
  }

  private fetchAccountTransactionDescs() {
    this.qnbUnitService
    .getAccountTransactionDescs()
    .subscribe( data => {
      this.accountTransactionDescs = data;
    });
  }

  private fetchChequesTransactionDescs() {
    this.qnbUnitService
    .getChequesTransactionDescs()
    .subscribe( data => {
      this.chequeTransactionDescs = data;
    });
  }

  private fetchContactBankTransactionDescs() {
    this.qnbUnitService
    .getContactBankTransactionDescs()
    .subscribe( data => {
      this.contactBankTransactionDescs = data;
    });
  }

  private fetchIPOTransactionDescs() {
    this.qnbUnitService
    .getIPOTransactionDescs()
    .subscribe( data => {
      this.ipoTransactionDescs = data;
    });
  }

  private transactionEntitlementForm() {
    this.transactionEntitlement = this.fb.group({
      'unit': new FormControl('', [Validators.required]),
    });
  }
}
