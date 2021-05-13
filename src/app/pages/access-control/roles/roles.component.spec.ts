import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnbRolesComponent } from './roles.component';

describe('RolesComponent', () => {
  let component: QnbRolesComponent;
  let fixture: ComponentFixture<QnbRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QnbRolesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnbRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
