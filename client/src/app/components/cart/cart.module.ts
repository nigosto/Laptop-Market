import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CartFormComponent } from './cart-form/cart-form.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [CartComponent, CartFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CartRoutingModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
