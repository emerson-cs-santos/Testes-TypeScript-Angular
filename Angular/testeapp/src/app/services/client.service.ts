import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService
{

  constructor( private http: HttpClient ) { }

  listarClientes(): Observable<Client[]>
  {
    return this.http.get<Client[]>('https://crudcrud.com/api/9bb57ec842ef4e68aa7b9ba2fda06d44/client');
  }

  inserirCliente(client: Client): Observable<Client>
  {
    return this.http.post<Client>('https://crudcrud.com/api/9bb57ec842ef4e68aa7b9ba2fda06d44/client', client);
  }

  atualizarCliente(client: Client): Observable<any>
  {
    const id = client._id;
    delete client._id;

    return this.http.put<Client>('https://crudcrud.com/api/9bb57ec842ef4e68aa7b9ba2fda06d44/client/' + id , client);
  }

  removerCliente(id: string): Observable<any>
  {
    return this.http.delete('https://crudcrud.com/api/9bb57ec842ef4e68aa7b9ba2fda06d44/client/' + id)
  }

}
