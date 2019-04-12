import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [NavbarComponent, FooterComponent, ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule,
        FlexLayoutModule
    ],
    exports: [NavbarComponent, FooterComponent, ]
})
export class SharedModule {}