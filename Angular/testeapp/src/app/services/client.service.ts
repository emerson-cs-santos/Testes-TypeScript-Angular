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
    return this.http.get<Client[]>('https://crudcrud.com/api/0b448c8d17484680b09485ae0a0b63d7/client');
  }

  inserirCliente(client: Client): Observable<Client>
  {
    return this.http.post<Client>('https://crudcrud.com/api/0b448c8d17484680b09485ae0a0b63d7/client', client);
  }

  atualizarCliente(client: Client): Observable<any>
  {
    return this.http.put<Client>('https://crudcrud.com/api/0b448c8d17484680b09485ae0a0b63d7/client/' + client._id ,client)
  }

  removerCliente(id: string): Observable<any>
  {
    return this.http.delete('https://crudcrud.com/api/0b448c8d17484680b09485ae0a0b63d7/client/' + id)
  }

}
