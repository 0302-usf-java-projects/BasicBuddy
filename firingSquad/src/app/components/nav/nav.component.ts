import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(// private userService: User Service,
    private router: Router
    // private sessionService: SessionServiceService,
    // public nav: NavbarService
    ) { }

  ngOnInit(): void {
  }

  Logout(){
    this.router.navigate(['login']);
  }

  Main(){
    this.router.navigate(['mainmenu']);
  }
  Profile(){
    this.router.navigate(['profile']);
  }

}
