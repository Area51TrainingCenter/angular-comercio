import {
  Component,
  Input
} from '@angular/core';

import { ExampleDef } from '../example.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent {
  @Input('items') items: ExampleDef[];
  constructor() { }
}
