import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryAuthorizationDetailsComponent } from './beneficiary-authorization-details.component';

describe('BeneficiaryAuthorizationDetailsComponent', () => {
  let component: BeneficiaryAuthorizationDetailsComponent;
  let fixture: ComponentFixture<BeneficiaryAuthorizationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryAuthorizationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryAuthorizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
