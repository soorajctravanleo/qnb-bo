import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoleComponent } from './create-role.component';

import { NbDialogRef, NbToastrService } from '@nebular/theme';

import {

  QnbRoleService,
 
} from '../../../../services';

import { HttpClientTestingModule } from '@angular/common/http/testing';




describe('CreateRoleComponent', () => {
  let component: CreateRoleComponent;
  let fixture: ComponentFixture<CreateRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [CreateRoleComponent],
      providers:[
        {provide:NbDialogRef,useValue:''},
        QnbRoleService,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
