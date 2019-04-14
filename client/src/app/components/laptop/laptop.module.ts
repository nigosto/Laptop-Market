import { NgModule } from "@angular/core";
import { LaptopRoutingModule } from './laptop-routing.module';
import { LaptopCreateComponent } from './laptop-create/laptop-create.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LaptopAllComponent } from './laptop-all/laptop-all.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LaptopLandingComponent } from './laptop-landing/laptop-landing.component';

@NgModule({
    declarations: [LaptopCreateComponent, LaptopAllComponent, LaptopDetailsComponent, LaptopLandingComponent],
    imports: [
        LaptopRoutingModule,
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    exports: [LaptopAllComponent, LaptopCreateComponent]
})
export class LaptopModule {}