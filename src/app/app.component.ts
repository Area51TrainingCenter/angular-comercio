import { Component } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];

  contructor() {
    this.products = [
      new Product(
        'movie0001',
        'Pulp Fiction',
        'https://ih0.redbubble.net/image.132958143.9684/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1.jpg',
        ['Action', 'Drama'],
        10
      ),
      new Product(
        'movie0002',
        'Matrix',
        'http://www.impawards.com/1999/posters/matrix_ver1_xlg.jpg',
        ['Action', 'SciFi', 'Cult'],
        10
      ),
      new Product(
        'movie0003',
        'Spiderman Homeoming',
        'http://t0.gstatic.com/images?q=tbn:ANd9GcT8W3Fe7DD101g0M7OCalJN9u675sQAJFslGCjvs74PTOfEKt_t',
        ['Superheroes'],
        10
      )
    ]
  }

}
