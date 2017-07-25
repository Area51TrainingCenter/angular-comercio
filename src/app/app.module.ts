import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  AppState,
  default as reducer
} from './app.reducer';

import {
  AppStore,
  appStoreProviders
} from './app.store';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    FromNowPipe,
    ChatThreadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [appStoreProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
