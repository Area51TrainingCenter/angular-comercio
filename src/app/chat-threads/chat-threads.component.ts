import {
  Component,
  OnInit,
  Inject
} from '@angular/core';

import { AppStore } from '../app.store';
import * as Redux from 'redux';
import { Thread } from '../thread/thread.model';

import

@Component({
  selector: 'app-chat-threads',
  templateUrl: './chat-threads.component.html',
  styleUrls: ['./chat-threads.component.css']
})
export class ChatThreadsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
