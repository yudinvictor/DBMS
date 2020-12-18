import { Component, OnInit } from '@angular/core';
import * as interfaces from '../../interfaces';
import {BackService} from "../../back.service";

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.scss']
})
export class CreateDriverComponent implements OnInit {

  constructor(public backService: BackService) { }

  elem: interfaces.Driver = {
    name: 'test_name',
    phone_number: 'test_phone number',
    branch: 1,
  };

  ngOnInit(): void {
    // this.backService.addDriver(this.elem).subscribe(resp => {
    //   console.log(resp);
    // });
  }

}
