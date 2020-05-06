import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/cards';
import { CardsService } from 'src/app/services/cards.service';

import { CardsTypesService } from 'src/app/services/cards-types.service';
import { CardTypes } from 'src/app/model/cardTypes';

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

  cardsTypesLista = new Array<CardTypes>();

  filtroType = '';

  constructor( private cardService: CardsService, private CardTypesService: CardsTypesService ) { }

  ngOnInit(): void
  {
    this.refreshCards();

    this.cardsTypesLista   = this.CardTypesService.list();
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

    // Desfaz filtro para enviar todas linhas do vetor, incluindo a nova ou alterada, senão por conta do filtro, iria para salvar faltando elementos e assim, se perderia
    this.refreshCards();

    if (this.editMode)
    {
      this.cardService.update(this.selCard);
    }
    else
    {
      this.cardService.insert(this.selCard);
    }
    this.selCard=null;

    // Recarregar lista e aplicar filtro
    this.refreshCards();
    this.nameFiltrar();
  }

  remove(id: number): void
  {
    this.cardService.remove(id);
    this.cancel();

    // Após apagar, recarregar lista e aplicar filtro
    this.refreshCards();
    this.nameFiltrar();
  }

  nameFiltrar(): void
  {
    this.refreshCards();
    if ( this.filtroNome.length > 0 )
    {
      this.filtroType = '';
      let filtro = this.cardsFiltro.filter( carta => { return carta.name.toLocaleLowerCase().includes(this.filtroNome); } )

      this.cards = filtro;
    }
    else
    {
      this.refreshCards();
    }
  }

  typeFiltrar(): void
  {
    this.refreshCards();
    if ( this.filtroType.length > 0 )
    {
      this.filtroNome = '';
      let filtro = this.cardsFiltro.filter( carta => { return carta.type.toLocaleLowerCase().includes(this.filtroType); } )

      this.cards = filtro;
    }
    else
    {
      this.refreshCards();
    }
  }

}
