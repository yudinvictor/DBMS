import { Component, OnInit } from '@angular/core';
import * as interfaces from '../../interfaces';
import {BackService} from "../../back.service";

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  constructor(public backService: BackService) { }

  elem: interfaces.Client = {
    name: 'test_name',
    phone_number: 'test_phone number',
  };


  ngOnInit(): void {
    // this.backService.addClient(this.elem).subscribe(resp => {
    //   console.log(resp);
    // });
  }
}
