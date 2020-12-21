import { Component, OnInit } from '@angular/core';
import {BackService} from '../back.service';
import {Order} from '../interfaces';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(private backService: BackService) { }
  idData = null;
  data: Order = null;
  errorData = '';

  findShip(): void {
    this.data = null;
    this.errorData = '';

    this.backService.getShippingByOrder(this.idData).subscribe((resp) => {
      console.log('URA!', resp);
      this.data = resp;
    },
    (error) => {
      console.log('ooops', error);
      this.errorData = error.statusText;
    });
  }

  ngOnInit(): void {
  }

}
