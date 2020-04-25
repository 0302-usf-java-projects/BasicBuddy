import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { MainMenuContainerComponent } from './components/main-menu-container/main-menu-container.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: LoginContainerComponent
  },
  {
    path: 'login',
    component: LoginContainerComponent
  },
{
  path: 'mainmenu',
  component: MainMenuContainerComponent
},
{
  path: 'profile',
  component: ProfileComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
