import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.css']
})
export class BuddiesComponent implements OnInit {

  buddy = 'Buddy';
  
  constructor() { }

  ngOnInit(): void {
  }

}
