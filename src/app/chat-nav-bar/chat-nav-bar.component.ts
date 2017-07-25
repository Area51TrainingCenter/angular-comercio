import { Component, OnInit, Inject } from '@angular/core';
import { AppStore } from '../app.store';
import * as Redux from 'redux';
import {
  AppState,
  getUnreadMessagesCount
} from '../app.reducer';


@Component({
  selector: 'app-chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {
  unreadMessagesCount: number;

  constructor( @Inject(AppStore) private store: Redux.Store<AppState>) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  ngOnInit() {
  }

  updateState() {
    this.unreadMessagesCount = getUnreadMessagesCount(this.store.getState())
  }

}
