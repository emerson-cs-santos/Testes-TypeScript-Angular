import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JogosComponent } from './views/jogos/jogos.component';
import { GeneroComponent } from './views/genero/genero.component';
import { SobreComponent } from './views/sobre/sobre.component';


const routes: Routes =
[
  { path: 'jogos', component: JogosComponent },
  { path: 'generos', component: GeneroComponent},
  { path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
