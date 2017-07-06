import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

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
  { label: 'NgNonBindable', name: 'NgNonBindable', path: '', component: null }
]


//Routes

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'ng_for', component: null, pathMatch: 'full' },
  { path: 'ng_switch', component: null, pathMatch: 'full' },
  { path: 'ng_style', component: null, pathMatch: 'full' },
  { path: 'ng_class', component: null, pathMatch: 'full' },
  { path: 'ng_non_bindable', component: null, pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useValue: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
