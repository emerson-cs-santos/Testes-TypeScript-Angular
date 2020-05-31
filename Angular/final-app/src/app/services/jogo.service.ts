import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jogo } from '../model/jogo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JogoService
{
  constructor( private http: HttpClient ) { }

  listar(): Observable<Jogo[]>
  {
    return this.http.get<Jogo[]>('https://crudcrud.com/api/e31a2dda4d9f47f38a9a7a2a6ca2abda/jogo');
  }

  inserir(jogo: Jogo): Observable<Jogo>
  {
    return this.http.post<Jogo>('https://crudcrud.com/api/e31a2dda4d9f47f38a9a7a2a6ca2abda/jogo', jogo);
  }

  atualizar(jogo: Jogo): Observable<any>
  {
    const id = jogo._id;
    delete jogo._id;

    return this.http.put<Jogo>('https://crudcrud.com/api/e31a2dda4d9f47f38a9a7a2a6ca2abda/jogo/' + id , jogo);
  }

  remover(id: string): Observable<any>
  {
    return this.http.delete('https://crudcrud.com/api/e31a2dda4d9f47f38a9a7a2a6ca2abda/jogo/' + id);
  }
}
