import { Injectable } from '@angular/core';
import { Card } from '../model/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService
{
  private cards = new Array<Card>();
  private autoGenerateId = 0;

  insert(card: Card): void
  {
    card.id = this.autoGenerateId;
    this.cards.push(card);
    this.autoGenerateId++;
    this.save();
  }

  list(): Array<Card>
  {
    this.load();
    return this.cards;
  }

  remove (id: number): void
  {
    for ( let i = 0; i < this.cards.length; i++ )
    {
      let m = this.cards[i];

      if (m.id === id)
      {
        this.cards.splice(i,1);
        break;
      }
    }
    this.save();
  }

  update(card: Card): void
  {
    for ( let i = 0; i < this.cards.length; i++ )
    {
      let g = this.cards[i];

      if (g.id === card.id)
      {
        this.cards[i] = card;
        break;
      }
    }
    this.save();
  }

  save(): void
  {
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  load(): void
  {
    this.cards = JSON.parse(localStorage.getItem('cards'));
    if (this.cards == null)
    {
      this.cards = new Array<Card>();
    }
  }

  constructor() { }
}
