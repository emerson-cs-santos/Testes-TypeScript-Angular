import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Teste1Component } from './views/teste1/teste1.component';
import { Teste2Component } from './views/teste2/teste2.component';
import { Teste3Component } from './views/teste3/teste3.component';

@NgModule({
  declarations: [
    AppComponent,
    Teste1Component,
    Teste2Component,
    Teste3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
