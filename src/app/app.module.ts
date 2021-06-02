/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Provider } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NbDatepickerModule, NbMenuModule, NbSidebarModule, NbTimepickerModule, NbDialogModule } from '@nebular/theme';

import { CookieService } from 'ngx-cookie-service';

import { QnbAuthModule } from './auth/auth.module';
import { INTERCEPTORS } from './app-interceptors';

const SERVICES: Provider[] = [
  CookieService,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    QnbAuthModule,
    NbDialogModule.forRoot(),
  ],
  providers: [
    ...SERVICES,
    ...INTERCEPTORS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
