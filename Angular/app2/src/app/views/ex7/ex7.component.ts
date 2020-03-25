import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.css']
})
export class Ex7Component implements OnInit {

  div1 = 'ver';
  div2 = 'esconder';
  div3 = 'esconder';

  constructor() { }

  ngOnInit(): void {
  }

  botao1(): void {

    this.div1 = 'ver';
    this.div2 = 'esconder';
    this.div3 = 'esconder';
  }

  botao2(): void {

    this.div1 = 'esconder';
    this.div2 = 'ver';
    this.div3 = 'esconder';
  }

  botao3(): void {

    this.div1 = 'esconder';
    this.div2 = 'esconder';
    this.div3 = 'ver';
  }

}
