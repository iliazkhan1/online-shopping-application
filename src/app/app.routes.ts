import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent, title: 'Phone Store - Products' },
  { path: 'details/:id', component: ProductDetailComponent, title: 'Phone Store - Product Details' },
];