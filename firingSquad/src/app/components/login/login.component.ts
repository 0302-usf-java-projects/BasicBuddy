import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { Users } from '../../models/users.model';
// import { SessionServiceService } from '../../services/session-service.service';
// import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  animMe: boolean = false;

  constructor(// private userService: User Service,
              private router: Router
              // private sessionService: SessionServiceService,
              // public nav: NavbarService
              ) { }

  sessionId: string;


  loginForm = new FormGroup({
    emailAddress: new FormControl(),
    password: new FormControl()
  });

//  user: Users;

  ngOnInit() {
    //this.nav.hide();
    if (sessionStorage.id){
      this.sessionId = JSON.parse(sessionStorage.id);
      console.log('sessionId login: ' + this.sessionId);
      this.router.navigateByUrl('/profile');
    }

  }

  Login(){
    this.router.navigate(['mainmenu']);
    const email = this.loginForm.get('emailAddress').value;
    const password = this.loginForm.get('password').value;
    let id = null;


    // console.log(email);
    // console.log(password);

    // const promise = new Promise<Users>((resolve) => {
    //   resolve(this.userService.getUser(email, password));
    // });

    // promise.then((value) => {
    //   this.user = value;
    //   // console.log(this.user.password);

    //   if (this.user.password === password){
    //     id = this.user.id;
    //   }
    //   if (id != null){
    //     this.sessionService.changeMessage(id);
    //     sessionStorage.id = JSON.stringify(id);
    //     this.router.navigateByUrl('/profile');
    //   }
    // });
    this.animMe = true;

    setTimeout(() => {

    }, 1000);

  }
}
