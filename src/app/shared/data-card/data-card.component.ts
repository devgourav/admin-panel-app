import { Component, Input, OnInit } from '@angular/core';
import { cardData } from '../models/card.model';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent implements OnInit {
  @Input() data: cardData = {
    heading: '',
    value: 0
  };
  constructor() {}

  ngOnInit(): void {}
}
