import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo.service';
import { Jogo } from 'src/app/model/jogo';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Directive, Input, ViewChild, ElementRef} from '@angular/core';

import { GeneroService } from 'src/app/services/genero.service';
import { Genero } from 'src/app/model/genero';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit
{
  jogos: Array<Jogo>;
  colunas = ['nome', 'genero', 'avaliacao', 'status' , 'acoes'];
  jogoSelecionado: Jogo;
  inserindo = false;

  generosLista = new Array<Genero>();

  matcher = new MyErrorStateMatcher();
  nomeValidator: FormControl =  new FormControl('', [Validators.required]);
  generoValidator: FormControl =  new FormControl('', [Validators.required]);
  avaliacaoValidator: FormControl =  new FormControl('', [Validators.required]);
  statusValidator: FormControl =  new FormControl('', [Validators.required]);
  @ViewChild("nome") inputEl: ElementRef;

  avaliacaoSelecionado = 'ok';
  statusSelecionado = 'quero';

  constructor( private jogoService: JogoService, private generoService: GeneroService ) { }

  ngOnInit(): void
  {
    // this.listar();
    this.generoService.listar().subscribe(generos => {
      this.generosLista = generos;
    });
  }

  listar(): void
  {
    // => arrow function
    this.jogoService.listar().subscribe(jogos => {
      this.jogos = jogos;
    });
  }

  remover(id: string): void
  {
    if (confirm('Tem certeza?'))
    {
      this.jogoService.remover(id).subscribe( () => {
        alert('Jogo removido!');
        this.listar();
      });
    }
  }

  selecionar(jogo: Jogo): void
  {
    this.inserindo = false;
    this.jogoSelecionado = jogo;

    this.avaliacaoSelecionado = this.jogoSelecionado.avaliacao;
    this.statusSelecionado = this.jogoSelecionado.status;
  }

  cancelar(): void
  {
    this.jogoSelecionado = null;
    this.avaliacaoSelecionado = 'ok';
    this.statusSelecionado = 'quero';
  }

  salvar(): void
  {

    if ( !this.jogoSelecionado.nome || !this.jogoSelecionado.genero || !this.jogoSelecionado.avaliacao || !this.jogoSelecionado.status )
    {
      alert('Preencha os campos obrigatórios!');
    }
    else
    {
      this.jogoSelecionado.avaliacao = this.avaliacaoSelecionado;
      this.jogoSelecionado.status = this.statusSelecionado;

      if( this.inserindo )
      {
        this.jogoService.inserir( this.jogoSelecionado ).subscribe( () => {
          alert('Jogo inserido!');
          this.listar();
        });
      }
      else
      {
        this.jogoService.atualizar( this.jogoSelecionado ).subscribe( () => {
          alert('Jogo atualizado!');
          this.listar();
        });
      }
      this.jogoSelecionado = null;
      this.avaliacaoSelecionado = 'ok';
      this.statusSelecionado = 'quero';
    }

  }

  new(): void
  {
    this.inserindo = true;
    this.jogoSelecionado = new Jogo();

    setTimeout( () => { this.inputEl.nativeElement.focus();  }, 100 );
  }

}
