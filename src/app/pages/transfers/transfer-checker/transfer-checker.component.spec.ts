import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferCheckerComponent } from './transfer-checker.component';

describe('TransferCheckerComponent', () => {
  let component: TransferCheckerComponent;
  let fixture: ComponentFixture<TransferCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferCheckerComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
