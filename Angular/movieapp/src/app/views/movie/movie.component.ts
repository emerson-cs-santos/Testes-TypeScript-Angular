import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = new Array<Movie>();

  constructor()
  {
    // Criando um novo filme
    const alien = new Movie();
    alien.name = 'Alien - Oitavo Passageiro';
    alien.rating = 4;
    this.movies.push(alien);

    // Criando outro filme
    const parasita = new Movie();
    parasita.name = 'Parasita';
    parasita.rating = 10;
    this.movies.push(parasita);
  }

  ngOnInit(): void {
  }

}
