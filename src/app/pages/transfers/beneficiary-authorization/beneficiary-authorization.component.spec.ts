import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryAuthorizationComponent } from './beneficiary-authorization.component';

describe('BeneficiaryAuthorizationComponent', () => {
  let component: BeneficiaryAuthorizationComponent;
  let fixture: ComponentFixture<BeneficiaryAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
