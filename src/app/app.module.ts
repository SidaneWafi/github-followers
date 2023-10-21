import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {RoutingModule} from './routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SingupFormComponent } from './singup-form/singup-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';

import { InjectionToken } from '@angular/core';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './services/followers.service';

import { NavbarComponent } from './navbar/navbar.component';

export const API_URL = new InjectionToken<string>('apiUrl');


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SingupFormComponent,
    PostsComponent,
    FollowersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [ { provide: API_URL, useValue: 'https://api.github.com/users/IDBRAHIMDEV/followers' } ,PostService ,FollowersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
