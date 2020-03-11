import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component implements OnInit {

  imgTrocar = '\\assets\\ex5\\image1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  trocarImagem(): void {

    if (this.imgTrocar === '\\assets\\ex5\\image1.jpg') {
      this.imgTrocar = '\\assets\\ex5\\image2.jpg';
    } else {
      this.imgTrocar = '\\assets\\ex5\\image1.jpg'; }
  }

}
