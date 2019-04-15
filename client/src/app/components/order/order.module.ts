import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderRoutingModule } from './order-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { OrderAllComponent } from './order-all/order-all.component';

@NgModule({
    declarations: [OrderListComponent, OrderAllComponent],
    imports: [
        CommonModule,
        OrderRoutingModule,
        FlexLayoutModule,
        MaterialModule
    ]
})
export class OrderModule { }
