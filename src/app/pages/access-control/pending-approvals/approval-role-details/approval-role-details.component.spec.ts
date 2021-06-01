import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRoleDetailsComponent } from './approval-role-details.component';

describe('ApprovalRoleDetailsComponent', () => {
  let component: ApprovalRoleDetailsComponent;
  let fixture: ComponentFixture<ApprovalRoleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalRoleDetailsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalRoleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
