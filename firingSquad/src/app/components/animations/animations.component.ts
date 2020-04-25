import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [trigger('EnterLeave', [
    state('flyIn', style({ transform: 'translateX(0)' })),
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('1.5s 300ms ease-in')
    ]),
    transition(':leave', [
      animate('1.0s ease-out', style({ transform: 'translateX(100%)' }))
    ])
  ])]
})
export class AnimationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
