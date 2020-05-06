import { Injectable } from '@angular/core';
import { GameGenre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService
{
  private GamesGenre = new Array<GameGenre>();
  private autoGenerateId = 0;

  insert(GameGenre: GameGenre): void
  {
    GameGenre.id = this.autoGenerateId;
    this.GamesGenre.push(GameGenre);
    this.autoGenerateId++;
    this.save();
  }

  list(): Array<GameGenre>
  {
    this.load();
    return this.GamesGenre;
  }

  remove (id: number): void
  {
    for ( let i = 0; i < this.GamesGenre.length; i++ )
    {
      let m = this.GamesGenre[i];

      if (m.id === id)
      {
        this.GamesGenre.splice(i,1);
        break;
      }
    }
    this.save();
  }

  update(card: GameGenre): void
  {
    for ( let i = 0; i < this.GamesGenre.length; i++ )
    {
      let g = this.GamesGenre[i];

      if (g.id === card.id)
      {
        this.GamesGenre[i] = card;
        break;
      }
    }
    this.save();
  }

  save(): void
  {
    localStorage.setItem('GamesGenre', JSON.stringify(this.GamesGenre));
  }

  load(): void
  {
    this.GamesGenre = JSON.parse(localStorage.getItem('GamesGenre'));
    if (this.GamesGenre == null)
    {
      this.GamesGenre = new Array<GameGenre>();
    }
  }

  constructor() { }
}
