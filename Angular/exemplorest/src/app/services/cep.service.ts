import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService
{
  constructor(private http: HttpClient) { }

  public getCep(cep: string): Observable<Endereco>
  {
    return this.http.get<Endereco>('http://viacep.com.br/ws/' + cep + '/json');
  }
}
