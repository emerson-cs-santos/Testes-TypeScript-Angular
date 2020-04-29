import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-app';

  componenteAtual = '';

  exibirComponente(nome: string): void
  {
    this.componenteAtual = nome;
  }
}
