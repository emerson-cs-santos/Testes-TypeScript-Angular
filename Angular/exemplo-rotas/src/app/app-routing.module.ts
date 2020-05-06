import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Teste1Component } from './views/teste1/teste1.component';
import { Teste2Component } from './views/teste2/teste2.component';
import { Teste3Component } from './views/teste3/teste3.component';

const routes: Routes =
[
  {path: 'teste1', component: Teste1Component}
  ,{path: 'teste2', component: Teste2Component}
  ,{path: 'teste3', component: Teste3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
