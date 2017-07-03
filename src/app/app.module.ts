import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    ProductImageComponent,
    ProductRowComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
