import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileMaintenanceRoutingModule } from './profile-maintenance-routing.module';
import { ProfileMaintenanceComponent } from './profile-maintenance.component';


@NgModule({
  declarations: [
    ProfileMaintenanceComponent
  ],
  imports: [
    CommonModule,
    ProfileMaintenanceRoutingModule
  ]
})
export class ProfileMaintenanceModule { }
