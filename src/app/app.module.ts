import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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

import { UserModule } from './user/user.module';
import { AnalyticsModule } from './analytics/analytics.module';


import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { IntroComponent } from './intro/intro.component';


import { ExampleDef } from './example.model';
import { UserComponent } from './user/user.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchResultComponent } from './you-tube-search/search-result/search-result.component';
import { SearchBoxComponent } from './you-tube-search/search-box/search-box.component';

import { youTubeSearchInjectables } from './you-tube-search/you-tube-search.injectables';


// Master list

export const examples: ExampleDef[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  { label: 'Injector', name: 'inyector', path: 'injector', component: UserComponent },
  { label: 'Factory', name: 'factory', path: 'factory', component: AnalyticsComponent },
  { label: 'HTTP', name: 'http', path: 'http', component: SimpleHttpComponent },
  { label: 'YouTube', name: 'youtube', path: 'youtube', component: YouTubeSearchComponent }
]


//Routes
const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'injector', component: UserComponent, pathMatch: 'full' },
  { path: 'factory', component: AnalyticsComponent, pathMatch: 'full' },
  { path: 'http', component: SimpleHttpComponent, pathMatch: 'full' },
  { path: 'youtube', component: YouTubeSearchComponent, pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    UserComponent,
    SidebarComponent,
    SidebarItemComponent,
    AnalyticsComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    AnalyticsModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [
    youTubeSearchInjectables,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
