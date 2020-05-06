import { Injectable } from '@angular/core';
import { CardTypes } from '../model/cardTypes';

@Injectable({
  providedIn: 'root'
})
export class CardsTypesService
{
  private cardsTypes = new Array<CardTypes>();
  private autoGenerateId = 0;

  insert(cardType: CardTypes): void
  {
    cardType.id = this.autoGenerateId;
    this.cardsTypes.push(cardType);
    this.autoGenerateId++;
    this.save();
  }

  list(): Array<CardTypes>
  {
    this.load();
    return this.cardsTypes;
  }

  remove (id: number): void
  {
    for ( let i = 0; i < this.cardsTypes.length; i++ )
    {
      let m = this.cardsTypes[i];

      if (m.id === id)
      {
        this.cardsTypes.splice(i,1);
        break;
      }
    }
    this.save();
  }

  update(card: CardTypes): void
  {
    for ( let i = 0; i < this.cardsTypes.length; i++ )
    {
      let g = this.cardsTypes[i];

      if (g.id === card.id)
      {
        this.cardsTypes[i] = card;
        break;
      }
    }
    this.save();
  }

  save(): void
  {
    localStorage.setItem('cardsTypes', JSON.stringify(this.cardsTypes));
  }

  load(): void
  {
    this.cardsTypes = JSON.parse(localStorage.getItem('cardsTypes'));
    if (this.cardsTypes == null)
    {
      this.cardsTypes = new Array<CardTypes>();
    }
  }

  constructor() { }
}
