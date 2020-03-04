import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  sobre: string;

  constructor() { }

  ngOnInit(): void {
    this.sobre = 'Sobre essa aplicação';
  }

  msg(): void{
    alert('Teste');
  }

}
