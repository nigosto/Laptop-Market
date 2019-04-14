import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { OrderListComponent } from './order-list/order-list.component';
import { GetUserOrdersResolver } from 'src/app/core/resolvers/get-user-orders.resolver';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: OrderListComponent,
        canActivate: [AuthGuard],
        resolve: {orders: GetUserOrdersResolver}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule {}