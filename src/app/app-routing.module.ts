import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharityImpactComponent } from './pages/charity-impact/charity-impact.component';
import { HeroDirectoryComponent } from './pages/hero-directory/hero-directory.component';
import { PrizePoolComponent } from './pages/prize-pool/prize-pool.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { WinnersVerificationComponent } from './pages/winners-verification/winners-verification.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserLayoutComponent } from './pages/user-layout/user-layout.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

const routes: Routes = [
  { path: '', component: CharityImpactComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'subscribe', component: SubscribeComponent },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'charities', component: HeroDirectoryComponent },
      { path: 'draws', component: PrizePoolComponent }
    ]
  },
  { path: 'user-dashboard', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'hero-directory', redirectTo: 'charities', pathMatch: 'full' },
  { path: 'prize-pool', redirectTo: 'draws', pathMatch: 'full' },
  { path: 'draw-configuration', redirectTo: 'draws', pathMatch: 'full' },
  { path: 'vanguard-draw-live', redirectTo: 'draws', pathMatch: 'full' },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'admin', component: AdminDashboardComponent },
      { path: 'winners', component: WinnersVerificationComponent }
    ]
  },
  { path: 'winners-verification', redirectTo: 'winners', pathMatch: 'full' },
  { path: 'admin-dashboard', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
