import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.css']
})
export class Ex6Component implements OnInit {

  texto = '';

  constructor() { }

  ngOnInit(): void {
  }

  mudarTexto(textoNovo: string): void {

    this.texto = textoNovo;
  }

}
