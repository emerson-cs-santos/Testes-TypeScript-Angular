import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/services/genero.service';
import { Genero } from 'src/app/model/genero';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Directive, Input, ViewChild, ElementRef} from '@angular/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit
{
  generos: Array<Genero>;
  colunas = ['nome', 'acoes'];
  generoSelecionado: Genero;
  inserindo = false;

  matcher = new MyErrorStateMatcher();
  FieldValidator: FormControl =  new FormControl('', [Validators.required]);
  @ViewChild("nome") inputEl: ElementRef;

  constructor( private generoService: GeneroService ) { }

  ngOnInit(): void
  {
    //this.listar();

  }

  listar(): void
  {
    // => arrow function
    this.generoService.listar().subscribe(generos => {
      this.generos = generos;
    });
  }

  remover(id: string): void
  {
    if (confirm('Tem certeza?'))
    {
      this.generoService.remover(id).subscribe( () => {
        alert('Gênero removido!');
        this.listar();
      });
    }
  }

  selecionar(genero: Genero): void
  {
    this.inserindo = false;
    this.generoSelecionado = genero;
  }

  cancelar(): void
  {
    this.generoSelecionado = null;
  }

  salvar(): void
  {
    if ( !this.generoSelecionado.nome )
    {
      alert('Preencha os campos obrigatórios!');
    }
    else
    {
      if( this.inserindo )
      {
        this.generoService.inserir( this.generoSelecionado ).subscribe( () => {
          alert('Gênero inserido!');
          this.listar();
        });
      }
      else
      {
        this.generoService.atualizar( this.generoSelecionado ).subscribe( () => {
          alert('Gênero atualizado!');
          this.listar();
        });
      }
      this.generoSelecionado = null;
    }
  }

  new(): void
  {
    this.inserindo = true;
    this.generoSelecionado = new Genero();

    setTimeout( () => { this.inputEl.nativeElement.focus();  }, 100 );
  }

}
