import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './views/game/game.component';
import { GenreComponent } from './views/genre/genre.component';

const routes: Routes =
[
  {path: 'GameComponent', component: GameComponent}
  ,{path: 'GenreComponent', component: GenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
