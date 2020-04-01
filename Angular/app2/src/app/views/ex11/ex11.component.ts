import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex11',
  templateUrl: './ex11.component.html',
  styleUrls: ['./ex11.component.css']
})
export class Ex11Component implements OnInit {

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
