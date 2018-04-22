import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService, UserService, KiralamaService } from './providers';
import { NotificationsModule, NotificationsService } from 'angular4-notify';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),

    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    NotificationsModule,

    RouterModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    UserService,
    KiralamaService,
    NotificationsService,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
