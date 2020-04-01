import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exemplos e exercicios';

  componenteAtual = '';

  exibirComponente(nome: string): void
  {
    this.componenteAtual = nome;
  }
}
