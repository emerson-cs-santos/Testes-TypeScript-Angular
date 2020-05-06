import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre.service';
import { GameGenre } from 'src/app/model/genre';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit
{
  gameGenres = new Array<GameGenre>();
  selGameGenre: GameGenre = null;
  editMode = false;

  filtroNome = '';
  cardsFiltro = new Array<GameGenre>();

  constructor( private GenresService: GenreService ) { }

  ngOnInit(): void
  {
    this.refreshCards();
  }

  refreshCards(): void
  {
    this.gameGenres   = this.GenresService.list();
    this.cardsFiltro  = this.GenresService.list();
  }

  selectCard(card: GameGenre): void
  {
    this.selGameGenre = card;
    this.editMode = true;
  }

  new(): void
  {
    this.selGameGenre = new GameGenre();
    this.editMode = false;
  }

  cancel(): void
  {
    this.selGameGenre = null;
    this.editMode = false;
  }

  save(): void
  {

    // Desfaz filtro para enviar todas linhas do vetor, incluindo a nova ou alterada, senão por conta do filtro, iria para salvar faltando elementos e assim, se perderia
    this.refreshCards();

    if (this.editMode)
    {
      this.GenresService.update(this.selGameGenre);
    }
    else
    {
      this.GenresService.insert(this.selGameGenre);
    }
    this.selGameGenre=null;

    // Recarregar lista e aplicar filtro
    this.refreshCards();
    this.nameFiltrar();
  }

  remove(id: number): void
  {
    this.GenresService.remove(id);
    this.cancel();

    // Após apagar, recarregar lista e aplicar filtro
    this.refreshCards();
    this.nameFiltrar();
  }

  nameFiltrar(): void
  {
    this.refreshCards();
    if ( this.filtroNome.length > 0 )
    {
      let filtro = this.cardsFiltro.filter( carta => { return carta.name.toLocaleLowerCase().includes(this.filtroNome); } )

      this.gameGenres = filtro;
    }
    else
    {
      this.refreshCards();
    }
  }

}
