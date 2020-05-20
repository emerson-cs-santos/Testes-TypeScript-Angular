import { Component, OnInit } from '@angular/core';
import { TimezoneService } from 'src/app/services/timezone.service';
import { Timezone } from 'src/app/model/timezone';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit
{
  timezoneBuscar: string;
  timezone: Timezone;

  constructor(private timeZone: TimezoneService) { }

  ngOnInit(): void
  {
  }

  carregarTimezone(): void
  {
    this.timeZone.buscarTimezone(this.timezoneBuscar).subscribe( retorno =>  {  this.timezone = retorno;   } )
  }

}
