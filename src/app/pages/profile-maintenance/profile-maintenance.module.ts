import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileMaintenanceRoutingModule } from './profile-maintenance-routing.module';
import { ProfileMaintenanceComponent } from './profile-maintenance.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileMaintenanceComponent,
  ],
  imports: [
    CommonModule,
    ProfileMaintenanceRoutingModule,
    ReactiveFormsModule
  ],
})
export class ProfileMaintenanceModule { }
