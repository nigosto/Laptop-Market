import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopLandingComponent } from './components/laptop/laptop-landing/laptop-landing.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { GetCartResolver } from './core/resolvers/get-cart.resolver';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'laptop',
        loadChildren: './components/laptop/laptop.module#LaptopModule'
    },
    {
        path: 'user',
        loadChildren: './components/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'laptop/home' 
    },
    {
        path: 'cart',
        loadChildren: './components/cart/cart.module#CartModule'
    },
    {
        path: 'orders',
        loadChildren: './components/order/order.module#OrderModule'
    },
    {
        path: '**',
        redirectTo: 'not/found'
    },
    {
        path: 'not/found',
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
