import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QnbRoleService,QnbUserService } from '../../../../services';

import { NbDialogService } from '@nebular/theme';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        QnbRoleService,
        QnbUserService,
        {provide:NbDialogService,useValue:''},
      ],
      declarations: [ListUsersComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
