import { AdminModule } from './admin/admin.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { StatusPipe } from './shared/pipes/status.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from 'ngx-order-pipe';
import { NgChartsModule } from 'ng2-charts';
import { CandidateModule } from './candidate/candidate.module';
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/compat/firestore';
import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/compat/functions';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
    AuthModule,
    CoreModule,
    BrowserAnimationsModule,
    AdminModule,
    OrderModule,
    NgChartsModule,
    CandidateModule,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ...(environment.production ? [] : [
      { provide: USE_AUTH_EMULATOR, useValue: ['http://localhost', 9099] },
      { provide: USE_FIRESTORE_EMULATOR, useValue: ['localhost', 8080] },
      { provide: USE_FUNCTIONS_EMULATOR, useValue: ['localhost', 5001] }
  ])
],
  bootstrap: [AppComponent],
})
export class AppModule {}