import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex9',
  templateUrl: './ex9.component.html',
  styleUrls: ['./ex9.component.css']
})
export class Ex9Component implements OnInit {

  nome = '';
  nome_exibir = 'Digite o nome de uma raça de cachorro!';
  imagem = '\\assets\\ex9\\vazio.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  trocarImagem(): void
  {

    let raca = this.nome.toUpperCase();

    if (raca === 'DALMATA')
    {
      this.nome_exibir = 'Dalmata.';
      this.imagem = '\\assets\\ex9\\dalmata.jpg';
    }
      else if ( raca === 'PITBULL' )
      {
        this.nome_exibir = 'Pitbull.';
        this.imagem = '\\assets\\ex9\\pitbull.jpg';
      }
        else if ( raca === 'LABRADOR')
        {
          this.nome_exibir = 'Labrador.';
          this.imagem = '\\assets\\ex9\\labrador.jpg';
        }
          else if ( raca === '')
          {
            this.nome_exibir = 'Digite o nome de uma raça de cachorro!';
            this.imagem = '\\assets\\ex9\\vazio.jpg';
          }
            else
            {
              this.nome_exibir = 'Raça de cachorro não encontrada!';
              this.imagem = '\\assets\\ex9\\errado.png';
            }

  }

}
