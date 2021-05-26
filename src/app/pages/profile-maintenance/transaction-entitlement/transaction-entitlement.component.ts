import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'qnb-transaction-entitlement',
  templateUrl: './transaction-entitlement.component.html',
  styleUrls: ['./transaction-entitlement.component.scss'],
})
export class TransactionEntitlementComponent implements OnInit {
  selectedItem;
  transactionEntitlement: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.transactionEntitlementForm();
  }

  onSubmit(){}

  private transactionEntitlementForm(){
    this.transactionEntitlement = this.fb.group({
      'unit': new FormControl('', [Validators.required]),
      'profile': new FormControl('', [Validators.required])
    })
  }
}
