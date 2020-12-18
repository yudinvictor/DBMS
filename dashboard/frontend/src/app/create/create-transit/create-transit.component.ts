import {Component, Inject, OnInit} from '@angular/core';
import {Cargo} from '../../interfaces';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import * as interfaces from '../../interfaces';
import {BackService} from "../../back.service";

@Component({
  selector: 'app-create-transit',
  templateUrl: './create-transit.component.html',
  styleUrls: ['./create-transit.component.scss']
})
export class CreateTransitComponent implements OnInit {

  arr: Array<Cargo> = [
    {
      name: '123',
      weight: null,
      type: null,
    },
  ];
  start: string;
  finish: string;

  constructor(public backService: BackService,
    public dialogRef: MatDialogRef<CreateTransitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addCargo(): void {
    this.arr.push({
      name: 'Ещё один груз',
      weight: null,
      type: null,
    });
  }

  apply(): void {
    this.dialogRef.close({
      cargoes: this.arr,
      start: this.start,
      finish: this.finish
    });
  }

  elem: interfaces.Shipping = {
    start_time: new Date(),
    stop_time: new Date(),
    departure_address: 'ТЕСТ!',
    destination_address: 'Destination test',
    transport: 1,
    driver: 1,
    orders: [5, 6, 7],
  };

  ngOnInit(): void {
    // this.backService.addShipping(this.elem).subscribe(resp => {
    //   console.log(resp);
    // });
  }

}
