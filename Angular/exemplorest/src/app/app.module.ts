import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CepComponent } from './views/cep/cep.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProdutoComponent } from './views/produto/produto.component';
import { TimezoneComponent } from './views/timezone/timezone.component';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    ProdutoComponent,
    TimezoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
