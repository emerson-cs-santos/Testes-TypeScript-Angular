import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex17',
  templateUrl: './ex17.component.html',
  styleUrls: ['./ex17.component.css']
})
export class Ex17Component implements OnInit {

  arrayPaises = ['Brasil:Brasilia','Peru:Lima','Paraguay:Assunção','Chile:Santiago']
  constructor() { }

  ngOnInit(): void {
  }

  mostrarCapital(capital: string): void
  {
    alert(capital);
  }

}
