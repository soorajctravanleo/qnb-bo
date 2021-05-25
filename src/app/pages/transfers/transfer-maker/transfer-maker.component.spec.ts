import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMakerComponent } from './transfer-maker.component';

describe('TransferMakerComponent', () => {
  let component: TransferMakerComponent;
  let fixture: ComponentFixture<TransferMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
