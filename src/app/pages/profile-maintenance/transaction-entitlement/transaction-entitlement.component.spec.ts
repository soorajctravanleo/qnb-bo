import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEntitlementComponent } from './transaction-entitlement.component';

describe('TransactionEntitlementComponent', () => {
  let component: TransactionEntitlementComponent;
  let fixture: ComponentFixture<TransactionEntitlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionEntitlementComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionEntitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
