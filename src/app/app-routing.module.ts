import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
    pathMatch: 'full'
  },
  {
    path: 'category',
    loadChildren: './pages/category/category.module#CategoryModule'
  },
  {
    path: 'cart',
    loadChildren: './pages/cart/cart.module#CartModule'
  },
  {
    path: 'order',
    loadChildren: './pages/order/order.module#OrderModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
