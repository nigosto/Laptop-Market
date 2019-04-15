import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { OrderListComponent } from './order-list/order-list.component';
import { GetUserOrdersResolver } from 'src/app/core/resolvers/get-user-orders.resolver';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { OrderAllComponent } from './order-all/order-all.component';
import { GetAllOrdersResolver } from 'src/app/core/resolvers/get-all-orders.resolver';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: OrderListComponent,
        canActivate: [AuthGuard],
        resolve: {orders: GetUserOrdersResolver}
    },
    {
        path: 'all',
        canActivate: [AdminGuard],
        component: OrderAllComponent,
        resolve: {orders: GetAllOrdersResolver}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule {}