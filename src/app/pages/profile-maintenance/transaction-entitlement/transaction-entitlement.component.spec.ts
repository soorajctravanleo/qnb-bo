import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { TransactionEntitlementComponent } from './transaction-entitlement.component';
import { QnbUnitService } from '../../../services';

describe('TransactionEntitlementComponent', () => {
  let component: TransactionEntitlementComponent;
  let fixture: ComponentFixture<TransactionEntitlementComponent>;
  let UnitService: QnbUnitService;
  let _httpHandler: HttpHandler;

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({
        imports: [
          HttpClientTestingModule,
        ],
        declarations: [TransactionEntitlementComponent],
        providers: [
          FormBuilder,
          QnbUnitService,
        ],
      })
      .compileComponents();

    UnitService = new QnbUnitService(new HttpClient(_httpHandler));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionEntitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    if (fixture === undefined || component === undefined) {
      fixture = TestBed.createComponent(TransactionEntitlementComponent);
      component = fixture.componentInstance;
    }
    expect(component).toBeTruthy();
  });

  it('should fetch unit list', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      UnitService.fetchUnits().subscribe(res => {
        expect(res.length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
