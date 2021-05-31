import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEntitlementComponent } from './transaction-entitlement.component';

import { FormBuilder } from '@angular/forms';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { QnbUnitService } from '../../../services';

describe('TransactionEntitlementComponent', () => {
  let component: TransactionEntitlementComponent;
  let fixture: ComponentFixture<TransactionEntitlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ],
      declarations: [TransactionEntitlementComponent],
      providers:[
        FormBuilder,
        QnbUnitService,
      ],
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
