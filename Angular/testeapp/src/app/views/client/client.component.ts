import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit
{
  clientes: Array<Client>;
  colunas = ['nome', 'cpf', 'acoes'];
  clienteSelecionado: Client;
  inserindo = false;

  constructor( private clientService: ClientService ) { }

  ngOnInit(): void
  {
    this.listar();
  }

  listar(): void
  {
    // => arrow function
    this.clientService.listarClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  remover(id: string): void
  {
    if (confirm('Tem certeza?'))
    {
      this.clientService.removerCliente(id).subscribe( () => {
        alert('Cliente removido!');
        this.listar();
      });
    }
  }

  selecionar(cliente: Client): void
  {
    this.inserindo = false;
    this.clienteSelecionado = cliente;
  }

  cancelar(): void
  {
    this.clienteSelecionado = null;
  }

  salvar(): void
  {
    if( this.inserindo )
    {
      this.clientService.inserirCliente( this.clienteSelecionado ).subscribe( () => {
        alert('Cliente inserido!');
        this.listar();
      });
    }
    else
    {
      this.clientService.atualizarCliente( this.clienteSelecionado ).subscribe( () => {
        alert('Cliente atualizado!');
        this.listar();
      });
    }
  }

  newClient(): void
  {
    this.inserindo = true;
    this.clienteSelecionado = new Client();
  }

}
