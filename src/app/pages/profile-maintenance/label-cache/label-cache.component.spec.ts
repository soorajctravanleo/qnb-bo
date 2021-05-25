import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelCacheComponent } from './label-cache.component';

describe('LabelCacheComponent', () => {
  let component: LabelCacheComponent;
  let fixture: ComponentFixture<LabelCacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelCacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
