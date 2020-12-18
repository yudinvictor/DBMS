import { Component, OnInit } from '@angular/core';
import * as interfaces from '../../interfaces';
import {BackService} from "../../back.service";

@Component({
  selector: 'app-create-transport',
  templateUrl: './create-transport.component.html',
  styleUrls: ['./create-transport.component.scss']
})
export class CreateTransportComponent implements OnInit {

  constructor(public backService: BackService) { }

  elem: interfaces.Transport = {
    type: 'грузовой',
    number: 'EKX',
    car_park: 1,
  };

  ngOnInit(): void {
    // this.backService.addTransport(this.elem).subscribe(resp => {
    //   console.log(resp);
    // });
  }

}
