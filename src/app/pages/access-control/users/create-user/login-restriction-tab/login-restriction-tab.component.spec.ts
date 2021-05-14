import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRestrictionTabComponent } from './login-restriction-tab.component';

describe('LoginRestrictionTabComponent', () => {
  let component: LoginRestrictionTabComponent;
  let fixture: ComponentFixture<LoginRestrictionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRestrictionTabComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRestrictionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
