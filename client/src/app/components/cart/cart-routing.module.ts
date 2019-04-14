import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { GetCartResolver } from 'src/app/core/resolvers/get-cart.resolver';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CartComponent,
        canActivate: [AuthGuard],
        resolve: {laptops: GetCartResolver}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule {}