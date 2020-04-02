import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex19',
  templateUrl: './ex19.component.html',
  styleUrls: ['./ex19.component.css']
})
export class Ex19Component implements OnInit {

  arrayNomes = [];

  nome: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  addLista(): void
  {
    if (this.nome.length > 0)
    {
      this.arrayNomes.push(this.nome);
      this.nome = '';
    }
    else
    {
      alert('Preencha o campo!');
    }
  }

}
