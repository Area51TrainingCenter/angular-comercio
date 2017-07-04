import {
  Component,
  Input
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  template: '<img class="product-image" [src]="product.imageUrl">',
})
export class ProductImageComponent {
  @Input() prodcut: Product;

  

}
