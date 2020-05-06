import { Component, OnInit } from '@angular/core';
import { CardTypes } from 'src/app/model/cardTypes';
import { CardsTypesService } from 'src/app/services/cards-types.service';

@Component({
  selector: 'app-cards-types',
  templateUrl: './cards-types.component.html',
  styleUrls: ['./cards-types.component.css']
})
export class CardsTypesComponent implements OnInit
{
  cardsTypes = new Array<CardTypes>();
  selCardType: CardTypes = null;
  editMode = false;

  filtroNome = '';
  cardsFiltro = new Array<CardTypes>();

  constructor( private CardTypesService: CardsTypesService ) { }

  ngOnInit(): void
  {
    this.refreshCards();
  }

  refreshCards(): void
  {
    this.cardsTypes   = this.CardTypesService.list();
    this.cardsFiltro  = this.CardTypesService.list();
  }

  selectCard(card: CardTypes): void
  {
    this.selCardType = card;
    this.editMode = true;
  }

  new(): void
  {
    this.selCardType = new CardTypes();
    this.editMode = false;
  }

  cancel(): void
  {
    this.selCardType = null;
    this.editMode = false;
  }

  save(): void
  {

    // Desfaz filtro para enviar todas linhas do vetor, incluindo a nova ou alterada, senão por conta do filtro, iria para salvar faltando elementos e assim, se perderia
    this.refreshCards();

    if (this.editMode)
    {
      this.CardTypesService.update(this.selCardType);
    }
    else
    {
      this.CardTypesService.insert(this.selCardType);
    }
    this.selCardType=null;

    // Recarregar lista e aplicar filtro
    this.refreshCards();
    this.nameFiltrar();
  }

  remove(id: number): void
  {
    this.CardTypesService.remove(id);
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
      let filtro = this.cardsFiltro.filter( carta => { return carta.name.toLocaleLowerCase().includes(this.filtroNome); } )

      this.cardsTypes = filtro;
    }
    else
    {
      this.refreshCards();
    }
  }

}
