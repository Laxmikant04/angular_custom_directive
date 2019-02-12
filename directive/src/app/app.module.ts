import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//  for scrolling using directive
import { AppComponent } from './app.component';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import {HackerNewsService} from './hacker-news.service';
import { HttpModule } from '@angular/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {AuthInterceptor}  from  './auth.interceptor';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    HttpModule
  ],
  providers: [HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
