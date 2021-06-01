import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponent } from './create-user.component';

import { NbDialogRef, NbToastrService } from '@nebular/theme';

import {
  QnbUserService,
  QnbRoleService,
  QnbListService,
} from '../../../../services';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpClient,HttpHandler } from '@angular/common/http';


describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let ListService: QnbListService;
  let UserService: QnbUserService;
  let RoleService: QnbRoleService;
  let _httpHandler: HttpHandler;

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

      ListService = new QnbListService(new HttpClient(_httpHandler));
      UserService = new QnbUserService(new HttpClient(_httpHandler));
      RoleService = new QnbRoleService(new HttpClient(_httpHandler));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should fetch countries list ", () => {

    ListService.fetchCountries().subscribe(res => {
       expect(res.length).toBeGreaterThanOrEqual(1);
    });

  });

  
  it("should fetch users list ", () => {

    UserService.fetchUsers().subscribe(res => {
       expect(res.length).toBeGreaterThanOrEqual(1);
    });

  });
    
  it("should fetch languages", () => {

    ListService.fetchLanguages().subscribe(res => {
       expect(res.length).toBeGreaterThanOrEqual(1);
    });

  });

  it("should fetch timezones", () => {

    ListService.fetchTimezones().subscribe(res => {
       expect(res.length).toBeGreaterThanOrEqual(1);
    });

  });

  /*
  it("should fetch user types", () => {

    UserService.fetchUserTypes().subscribe(res => {
       expect(res.length).toBeGreaterThanOrEqual(1);
    });

  });
    */
  
});
