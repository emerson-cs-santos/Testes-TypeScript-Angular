import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  classepetroleo = 'petroleo';

  constructor() { }

  ngOnInit(): void {
  }

  uper(param1: string): string {
    return param1.toUpperCase();
  }

}
