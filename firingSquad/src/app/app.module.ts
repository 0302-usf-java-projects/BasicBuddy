import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimationsComponent } from './components/animations/animations.component';
import { MainMenuContainerComponent } from './components/main-menu-container/main-menu-container.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
//import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
// import { NavComponent } from './nav/nav.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginContainerComponent,
    AnimationsComponent,
    MainMenuContainerComponent,
    NavComponent,
    ProfileComponent,
    //ImageUploadComponent,
    PostComponent,
    AllPostsComponent,
    FriendListComponent
    // BrowserAnimationsModule
   // NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
