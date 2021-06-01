import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMaintenanceComponent } from './profile-maintenance.component';

describe('ProfileMaintenanceComponent', () => {
  let component: ProfileMaintenanceComponent;
  let fixture: ComponentFixture<ProfileMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileMaintenanceComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      expect(component).toBeTruthy();
    });  
  });
});
