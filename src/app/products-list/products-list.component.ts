import {
  Component,
  Input
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})

export class ProductsListComponent {
  @Input() productList: Product[];
  constructor() { }

}
