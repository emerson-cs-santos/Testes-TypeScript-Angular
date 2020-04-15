import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies = new Array<Movie>();
  selMovie: Movie = null;
  isAddingNewMovie = false;

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

  selectedMovie(movie: Movie): void
  {
    this.selMovie = movie;
    this.isAddingNewMovie = false;
  }

  new(): void
  {
    this.selMovie = new Movie;
    this.isAddingNewMovie = true;
  }

  addMovie(): void
  {

    if( this.selMovie.name === '' || isNaN(this.selMovie.rating)  )
    {
      alert('Campo filme e nota são obrigatórios!');
    }
    else
    {
      if (this.isAddingNewMovie === true)
      {
        if (this.isAddingNewMovie)
        {
          this.movies.push(this.selMovie);
        }
        this.selMovie = null;
      }
    }

  }

  cancel(): void
  {
    this.selMovie = null;
  }

  remove(index: number): void
  {
    if (confirm('Apagar item?'))
    {
      this.movies.splice(index,1);
    }
  }



}
