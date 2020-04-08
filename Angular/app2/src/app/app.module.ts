// Precisa reiniciar o serviço ao mudar esse arquivo

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exemplo01Component } from './views/exemplo01/exemplo01.component';
import { Ex1Component } from './views/ex1/ex1.component';
import { Ex2Component } from './views/ex2/ex2.component';
import { Ex3Component } from './views/ex3/ex3.component';
import { Ex4Component } from './views/ex4/ex4.component';
import { Ex5Component } from './views/ex5/ex5.component';
import { Ex6Component } from './views/ex6/ex6.component';
import { Ex7Component } from './views/ex7/ex7.component';

// Para funcionar [(ngModel)]
// Também precisa colocar nos imports no final do @NgModule "FormsModule"
// Precisa reiniciar o serviço ao mudar esse arquivo
import { FormsModule } from '@angular/forms';

import { Ex8Component } from './views/ex8/ex8.component';
import { Ex9Component } from './views/ex9/ex9.component';
import { Ex10Component } from './views/ex10/ex10.component';
import { Ex11Component } from './views/ex11/ex11.component';
import { Ex12Component } from './views/ex12/ex12.component';
import { Ex13Component } from './views/ex13/ex13.component';
import { Ex14Component } from './views/ex14/ex14.component';
import { Ex15Component } from './views/ex15/ex15.component';
import { Ex16Component } from './views/ex16/ex16.component';
import { Ex17Component } from './views/ex17/ex17.component';
import { Ex18Component } from './views/ex18/ex18.component';
import { Ex19Component } from './views/ex19/ex19.component';
import { Ex20Component } from './views/ex20/ex20.component';
import { SobreComponent } from './views/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo01Component,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
    Ex6Component,
    Ex7Component,
    Ex8Component,
    Ex9Component,
    Ex10Component,
    Ex11Component,
    Ex12Component,
    Ex13Component,
    Ex14Component,
    Ex15Component,
    Ex16Component,
    Ex17Component,
    Ex18Component,
    Ex19Component,
    Ex20Component,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
