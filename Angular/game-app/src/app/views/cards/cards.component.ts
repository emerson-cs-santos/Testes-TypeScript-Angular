import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/cards';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit
{
  cards = new Array<Card>();
  selCard: Card = null;
  editMode = false;

  filtroNome = '';
  cardsFiltro = new Array<Card>();

  constructor(private cardService: CardsService) { }

  ngOnInit(): void
  {
    this.refreshCards();
  }

  refreshCards(): void
  {
    this.cards        = this.cardService.list();
    this.cardsFiltro  = this.cardService.list();
  }

  selectCard(card: Card): void
  {
    this.selCard = card;
    this.editMode = true;
  }

  new(): void
  {
    this.selCard = new Card();
    this.editMode = false;
  }

  cancel(): void
  {
    this.selCard = null;
    this.editMode = false;
  }

  save(): void
  {
    if (this.editMode)
    {
      this.cardService.update(this.selCard);
    }
    else
    {
      this.cardService.insert(this.selCard);
    }
    this.selCard=null;
    this.refreshCards();
  }

  remove(id: number): void
  {
    this.cardService.remove(id);
    this.cancel();
  }

  nameFiltrar(): void
  {
    if ( this.filtroNome.length > 0 )
    {
     // this.cardsFiltro = this.cards;
    //  this.cards = this.cardsFiltro.find(x => x.name === this.filtroNome);
    }
    else
    {
      //this.cards = this.cardsFiltro;
    }
  }

  // search(nameKey): Array<Card>
  // {
  //   for (var i=0; i < this.cards.length; i++)
  //   {
  //       if (this.cards[i].name === nameKey)
  //       {
  //         //this.cardsFiltro =

  //         //return this.cards[];
  //       }
  //   }
}
