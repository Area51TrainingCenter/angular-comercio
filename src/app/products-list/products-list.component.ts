import {
  Component,
  Input
} from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
})

export class ProductsListComponent {

  @Input() productList: Product[];


}
