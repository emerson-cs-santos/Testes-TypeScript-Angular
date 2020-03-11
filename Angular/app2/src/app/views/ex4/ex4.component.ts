import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {

  // As Duas formas de utilizas as barras de acesso aos diretórios

  // Forma 1 utilizando escape (somente uma barra é escape e não funciona)
  img1 = '\\assets\\ex4\\image1.jpg';

  // Forma 2
  img2 = '/assets/ex4/image2.jpg';

  // Novamente a forma 1
  img3 = '\\assets\\ex4\\image3.jpg';

  classCSSTamanho     = 'imagemTamanho';
  classCSSBordaMargin = 'imagemBorda imagemMargin';

  constructor() { }

  ngOnInit(): void {
  }

}
