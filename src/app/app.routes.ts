import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CandlesComponent } from './pages/candles/candles.component';
import { OthersComponent } from './pages/others/others.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'candles', component: CandlesComponent },
  { path: 'others', component: OthersComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
