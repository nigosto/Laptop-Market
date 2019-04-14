import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LaptopCreateComponent } from './laptop-create/laptop-create.component';
import { LaptopAllComponent } from './laptop-all/laptop-all.component';
import { GetAllLaptopsResolver } from 'src/app/core/resolvers/get-all-laptops.resolver';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { GetLaptopDetailsResolver } from 'src/app/core/resolvers/get-laptop-details.resolver';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { LaptopLandingComponent } from './laptop-landing/laptop-landing.component';

const routes: Routes = [
    {
        path: 'create',
        component: LaptopCreateComponent,
        canActivate: [AdminGuard]
    }, 
    {
        path: 'all',
        component: LaptopAllComponent,
        resolve: {laptops: GetAllLaptopsResolver}
    },
    {
        path: 'details/:id',
        component: LaptopDetailsComponent,
        resolve: {laptop: GetLaptopDetailsResolver}
    },
    {
        path: 'home',
        component: LaptopLandingComponent,
        resolve: {laptops: GetAllLaptopsResolver}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LaptopRoutingModule {}