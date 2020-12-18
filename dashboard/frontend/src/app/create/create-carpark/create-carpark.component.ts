import { Component, OnInit } from '@angular/core';
import * as interfaces from '../../interfaces';
import {BackService} from "../../back.service";

@Component({
  selector: 'app-create-carpark',
  templateUrl: './create-carpark.component.html',
  styleUrls: ['./create-carpark.component.scss']
})
export class CreateCarparkComponent implements OnInit {

  constructor(public backService: BackService) { }

  elem: interfaces.CarPark = {
    address: 'test_address',
    branch: 1,
  };

  ngOnInit(): void {
    // this.backService.addCarPark(this.elem).subscribe(resp => {
    //   console.log(resp);
    // });
  }

}
