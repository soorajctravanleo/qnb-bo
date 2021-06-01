import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersComponent } from './list-users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QnbRoleService,QnbUserService, QnbListService } from '../../../../services';

import { NbDialogService } from '@nebular/theme';

import { HttpClient,HttpHandler } from '@angular/common/http';


describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;
  let UserService: QnbUserService;
  let RoleService: QnbRoleService;
  let _httpHandler: HttpHandler;

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

      UserService = new QnbUserService(new HttpClient(_httpHandler));
      RoleService = new QnbRoleService(new HttpClient(_httpHandler));

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    if (fixture===undefined || component===undefined){
      fixture = TestBed.createComponent(ListUsersComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();   
    }
  
      expect(component).toBeTruthy();

  });
  
  it("should fetch users list ", () => {

    fixture.detectChanges();
    fixture.whenStable().then(() => {

        UserService.fetchUsers().subscribe(res => {
          expect(res.length).toBeGreaterThanOrEqual(1);
        });
    });
  });

});
