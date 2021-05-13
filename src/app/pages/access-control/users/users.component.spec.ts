import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnbUsersComponent } from './users.component';

describe('QnbUsersComponent', () => {
  let component: QnbUsersComponent;
  let fixture: ComponentFixture<QnbUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QnbUsersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnbUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
