import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex16',
  templateUrl: './ex16.component.html',
  styleUrls: ['./ex16.component.css']
})
export class Ex16Component implements OnInit {

  arrayImagens = ['\\assets\\ex16\\Crash.jpg', '\\assets\\ex16\\Mario.jpg', '\\assets\\ex16\\Resident evil.jpg', '\\assets\\ex16\\Sonic.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

  exibirNome(nome: string): void
  {
    const nomeTemp = nome.substr(nome.indexOf('ex16\\')+5).replace('.jpg','');
    alert(nomeTemp);
  }

}
