import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileTabComponent } from './user-profile-tab.component';

describe('UserProfileTabComponent', () => {
  let component: UserProfileTabComponent;
  let fixture: ComponentFixture<UserProfileTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileTabComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
