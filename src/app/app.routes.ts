import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ProductDetailsComponent } from './layout/product-details/product-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home/:category', component: HomeComponent },
  { path: 'home', component: HomeComponent, title: 'Vite + Angular' },
  { path: 'details/:Id', component: ProductDetailsComponent, title: 'Recipe Details' },
];
