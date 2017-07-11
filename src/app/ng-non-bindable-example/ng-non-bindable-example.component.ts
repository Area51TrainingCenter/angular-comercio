import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-non-bindable-example',
  templateUrl: './ng-non-bindable-example.component.html'
})
export class NgNonBindableExampleComponent {
  content: string;

  constructor() {
    this.content = 'Quiero vacaciones';
  }

}
