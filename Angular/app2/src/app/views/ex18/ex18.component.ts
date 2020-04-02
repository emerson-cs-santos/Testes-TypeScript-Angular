import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex18',
  templateUrl: './ex18.component.html',
  styleUrls: ['./ex18.component.css']
})
export class Ex18Component implements OnInit {

  arrayTitulos = ['Post title 1', 'Post title 2', 'Post title 3'];
  arrayConteudos = ['Post content 1', 'Post content 2', 'Post content 3'];

  constructor() { }

  ngOnInit(): void {
  }

}

