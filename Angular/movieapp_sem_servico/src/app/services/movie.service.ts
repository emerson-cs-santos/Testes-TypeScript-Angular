import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService
{
  private movies = new Array<Movie>();
  private autoGeneratedId = 0;

  constructor() { }

  insert(movie: Movie): void
  {
    movie.id = this.autoGeneratedId;
    this.movies.push(movie);
    this.autoGeneratedId++;
  }

  list(): Array<Movie>
  {
    return this.movies;
  }

  remove(id: number)
  {
    for (let i = 0; i < this.movies.length; i++)
    {
      let m = this.movies[i];
      if (m != null && m.id == id)
      {
        this.movies.splice(i,1)
        break;
      }
    }
  }

  update(movie: Movie)
  {
    for (let i = 0; i < this.movies.length; i++)
    {
      let m = this.movies[i];
      if (m != null && m.id == movie.id)
      {
        this.movies[i] = movie;
        break;
      }
    }
  }


}