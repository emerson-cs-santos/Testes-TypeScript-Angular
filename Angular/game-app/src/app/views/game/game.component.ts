import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/model/games';
import { GameGenre } from 'src/app/model/genre';
import { GenreService } from 'src/app/services/genre.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit
{
  games = new Array<Game>();
  // Variavel do tipo Game, para iniciar tipo que é um objeto, se usa null
  selGame: Game = null;
  editMode = false;

  GamesGenreLista = new Array<GameGenre>();

  // Fazendo injection do serviço
  constructor(private gameService: GameService, private GenresService: GenreService) { }

  ngOnInit(): void
  {
    this.refreshGames();
    this.GamesGenreLista   = this.GenresService.list();
  }

  refreshGames(): void
  {
    this.games = this.gameService.list();
  }

  selectGame(game: Game): void
  {
    this.selGame = game;
    this.editMode = true;
  }

  new(): void
  {
    this.selGame = new Game();
    this.editMode = false;
  }

  cancel(): void
  {
    this.selGame = null;
    this.editMode = false;
  }

  save(): void
  {
    if (this.editMode)
    {
      this.gameService.update(this.selGame);
    }
    else
    {
      this.gameService.insert(this.selGame);
    }
    this.selGame=null;
    this.refreshGames();
  }

  remove(id: number): void
  {
    this.gameService.remove(id);
  }

}
