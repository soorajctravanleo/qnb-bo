import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRoleDetailsComponent } from './request-role-details.component';

describe('RequestRoleDetailsComponent', () => {
  let component: RequestRoleDetailsComponent;
  let fixture: ComponentFixture<RequestRoleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestRoleDetailsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRoleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
