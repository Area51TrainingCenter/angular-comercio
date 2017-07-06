import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { IntroComponent } from './intro/intro.component';


import { ExampleDef } from './example.model';


// Master list

export const examples: ExampleDef[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'NgFor', name: 'NgFor', path: '', component: null },
  { label: 'NgSwitch', name: 'NgSwitch', path: '', component: null },
  { label: 'NgStyle', name: 'NgStyle', path: '', component: null },
  { label: 'NgClass', name: 'NgClass', path: '', component: null },
  { label: 'NgNonBindable', name: 'NgNonBindable', path: '', component: null },
]


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
