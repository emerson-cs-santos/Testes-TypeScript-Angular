import { Injectable } from '@angular/core';
import { Game } from '../model/games';

@Injectable({
  providedIn: 'root'
})

export class GameService
{
  private games = new Array<Game>();
  private autoGenerateId = 0;

  constructor() { }

  insert(game: Game): void
  {
    game.id = this.autoGenerateId;
    this.games.push(game);
    this.autoGenerateId++;
    this.save();
  }

  list(): Array<Game>
  {
    this.load();
    return this.games;
  }

  remove (id: number): void
  {
    for ( let i = 0; i < this.games.length; i++ )
    {
      let m = this.games[i];

      if (m.id === id)
      {
        this.games.splice(i,1);
        break;
      }
    }
    this.save();
  }

  update(game: Game): void
  {
    for ( let i = 0; i < this.games.length; i++ )
    {
      let g = this.games[i];

      if (g.id === game.id)
      {
        this.games[i] = game;
        break;
      }
    }
    this.save();
  }

  save(): void
  {
    localStorage.setItem('games', JSON.stringify(this.games));
  }

  load(): void
  {
    this.games = JSON.parse(localStorage.getItem('games'));
    if (this.games == null)
    {
      this.games = new Array<Game>();
    }
  }
}
