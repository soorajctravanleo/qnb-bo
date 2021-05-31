import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { QnbUnitService } from '../../../services';
import { MockUnit } from '../../../_helpers/models/backend';

@Component({
  selector: 'qnb-transaction-entitlement',
  templateUrl: './transaction-entitlement.component.html',
  styleUrls: ['./transaction-entitlement.component.scss'],
})
export class TransactionEntitlementComponent implements OnInit {
  transactionEntitlement: FormGroup;

  units: MockUnit[] = [];

  constructor(
    private fb: FormBuilder,
    private qnbUnitService: QnbUnitService,
  ) { }

  ngOnInit(): void {
    this.transactionEntitlementForm();
    this.fetchUnits();
  }

  onSubmit() {
    if (this.transactionEntitlement.valid) {}
  }

  private fetchUnits() {
    this.qnbUnitService
    .getUnits()
    .subscribe( data => {
      this.units = data;
    });
  }

  private transactionEntitlementForm() {
    this.transactionEntitlement = this.fb.group({
      'unit': new FormControl('', [Validators.required]),
      'dateAndTime' : this.fb.group({
        'date': new FormControl('', [Validators.required]),
        // 'time': new FormControl('', [Validators.required]),
      }),
      'channel': new FormControl('', [Validators.required]),
    });
  }
}
