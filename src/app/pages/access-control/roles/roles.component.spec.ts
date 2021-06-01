import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { NbDialogService } from '@nebular/theme';

import { QnbRolesComponent } from './roles.component';
import { QnbRoleService } from '../../../services';

describe('RolesComponent', () => {
  let component: QnbRolesComponent;
  let fixture: ComponentFixture<QnbRolesComponent>;
  let RoleService: QnbRoleService;
  let _httpHandler: HttpHandler;

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [QnbRolesComponent],

        providers: [
          { provide: NbDialogService, useValue: '', },
        ],
      })
      .compileComponents();

    RoleService = new QnbRoleService(new HttpClient(_httpHandler));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnbRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    if (fixture === undefined || component === undefined) {
      fixture = TestBed.createComponent(QnbRolesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
    expect(component).toBeTruthy();
  });

  it('should render "Create Role" button', () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(compiled.querySelector('button').textContent).toContain('Create Role');
    });
  });

  it('shoudl fetch roles', () => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      RoleService.fetchRoles().subscribe(res => {
        expect(res.length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
