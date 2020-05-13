import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService
{
  constructor(private http: HttpClient) { }

  // Neste caso será retornado uma array
  public listarProdutos(): Observable<Produto[]>
  {
    return this.http.get<Produto[]>('https://oficinacordova.azurewebsites.net/android/rest/produto');
  }
}
