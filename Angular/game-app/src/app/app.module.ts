import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { GameComponent } from './views/game/game.component';
import { CardsComponent } from './views/cards/cards.component';
import { CardsTypesComponent } from './views/cards-types/cards-types.component';
import { GenreComponent } from './views/genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardsComponent,
    CardsTypesComponent,
    GenreComponent
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
