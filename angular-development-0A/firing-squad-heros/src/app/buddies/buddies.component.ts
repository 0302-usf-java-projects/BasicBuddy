import { Component, OnInit } from '@angular/core';
import { Buddy } from '../buddy';

@Component({
  selector: 'app-buddies',
  templateUrl: './buddies.component.html',
  styleUrls: ['./buddies.component.css']
})
export class BuddiesComponent implements OnInit {

  buddy: Buddy = {
    id: 1,
    name: 'Alice'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
