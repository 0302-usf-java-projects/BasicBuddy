import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modals/user';
import { UserService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-main-menu-container',
  templateUrl: './main-menu-container.component.html',
  styleUrls: ['./main-menu-container.component.scss']
})
export class MainMenuContainerComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }


  getAll(){
    this.userService.getAllUsers().subscribe(users => this.users = users)
;  }

}
