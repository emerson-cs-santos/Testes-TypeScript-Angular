import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex15',
  templateUrl: './ex15.component.html',
  styleUrls: ['./ex15.component.css']
})
export class Ex15Component implements OnInit {

  valor1: number;
  valor2: number;

  resultado: number;

  constructor() { }

  ngOnInit(): void {
  }

  operacao(op: String): void
  {

    let tempValor: number = 0;

    switch (op)
    {
      case 'soma':
        tempValor = this.valor1 + this.valor2;
        break;

      case 'sub':
        tempValor = this.valor1 - this.valor2;
        break;

      case 'mult':
        tempValor = this.valor1 * this.valor2;
        break;

      case 'div':
        if (this.valor2 === 0)
        {
          tempValor = 0;
        }
        else
        {
          tempValor = this.valor1 / this.valor2;
        }
        break;

      default:
        tempValor = 0;
        break;
    }

    this.resultado = tempValor;
  }

}
