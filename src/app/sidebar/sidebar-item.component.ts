import {
  Component,
  Input
} from '@angular/core';

import { ExampleDef } from '../example.model'

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html'
})

export class SidebarItemComponent {
  @Input('item') item: ExampleDef;
  constructor() { }
}
