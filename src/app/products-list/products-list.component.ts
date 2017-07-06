import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
})

export class ProductsListComponent {

  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);

  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
