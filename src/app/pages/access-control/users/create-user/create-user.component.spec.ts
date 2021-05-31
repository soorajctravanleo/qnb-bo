import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';

import { NbDialogRef, NbToastrService } from '@nebular/theme';

import {
  QnbUserService,
  QnbRoleService,
  QnbListService,
} from '../../../../services';

import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [CreateUserComponent],
      providers:[
        {provide:NbToastrService,useValue:''},
        {provide:NbDialogRef,useValue:''},
        QnbUserService,
        QnbListService,
        QnbRoleService,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
