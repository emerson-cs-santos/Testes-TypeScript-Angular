import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JogosComponent } from './views/jogos/jogos.component';
import { GeneroComponent } from './views/genero/genero.component';


const routes: Routes =
[
  { path: 'jogos', component: JogosComponent },
  { path: 'generos', component: GeneroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
