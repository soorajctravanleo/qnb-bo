import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoleComponent } from './create-role.component';

import { NbDialogRef, NbToastrService } from '@nebular/theme';

import {

  QnbRoleService,
 
} from '../../../../services';

import { HttpClientTestingModule} from '@angular/common/http/testing';

import { HttpClient,HttpHandler } from '@angular/common/http';




describe('CreateRoleComponent', () => {
  let component: CreateRoleComponent;
  let fixture: ComponentFixture<CreateRoleComponent>;
  let RoleService: QnbRoleService;
  let _httpHandler: HttpHandler;

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

       
      RoleService = new QnbRoleService(new HttpClient(_httpHandler));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    if (fixture===undefined || component===undefined){
      fixture = TestBed.createComponent(CreateRoleComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
  

    expect(component).toBeTruthy();
  });

  it('should render "Create / Modify Role" in nb-card-header',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('nb-card-header').textContent).toContain('Create / Modify Role');
    /*
    fixture.detectChanges();
    fixture.whenStable().then(() => {

       expect(compiled.querySelector('nb-card-header').textContent).toContain('Create / Modify Role');
    });
    */
  });


  it("should fetech user roles ", () => {

    fixture.detectChanges();
    fixture.whenStable().then(() => {


      RoleService.fetchRoles().subscribe(res => {
        expect(res.length).toBeGreaterThanOrEqual(1);
      });
    });

  });


  
  it("should mark checked=true/false", () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      component.toggle(true);
      expect(component.checked).toEqual(true);
      component.toggle(false);
      expect(component.checked).toEqual(false);

    });
  });
  
});
