import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo01',
  templateUrl: './exemplo01.component.html',
  styleUrls: ['./exemplo01.component.css']
})
export class Exemplo01Component implements OnInit {

  // Só executa uma vez quando o componente aparecer, mesmo que o componente feche e abra novamente, não executa mais
  constructor() { }

  // Sempre executa quando o componente (essa tag desse componenente) aparecer
  ngOnInit(): void {
  }

  SomarValores(valor1: number, valor2: number ): number {
    return(valor1 + valor2);
  }

}
