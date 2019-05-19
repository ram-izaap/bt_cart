import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProductComponent]
})
export class SharedModule { }
