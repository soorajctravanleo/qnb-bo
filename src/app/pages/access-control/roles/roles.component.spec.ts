import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QnbRolesComponent } from './roles.component';
import { NbDialogService } from '@nebular/theme';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RolesComponent', () => {
  let component: QnbRolesComponent;
  let fixture: ComponentFixture<QnbRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [QnbRolesComponent],

      providers:[
        {provide:NbDialogService,useValue:'',},
      ],
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
