import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { HeroDirectoryComponent } from './pages/hero-directory/hero-directory.component';
import { WinnersVerificationComponent } from './pages/winners-verification/winners-verification.component';
import { DrawConfigurationComponent } from './pages/draw-configuration/draw-configuration.component';
import { VanguardDrawLiveComponent } from './pages/vanguard-draw-live/vanguard-draw-live.component';
import { PrizePoolComponent } from './pages/prize-pool/prize-pool.component';
import { CharityImpactComponent } from './pages/charity-impact/charity-impact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    ToasterComponent,
    HeroDirectoryComponent,
    WinnersVerificationComponent,
    DrawConfigurationComponent,
    VanguardDrawLiveComponent,
    PrizePoolComponent,
    CharityImpactComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    LoginComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
