import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'laptop',
        loadChildren: './components/laptop/laptop.module#LaptopModule'
    },
    {
        path: 'user',
        loadChildren: './components/authentication/authentication.module#AuthenticationModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
