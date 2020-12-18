import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Cargo} from '../../interfaces';
import * as interfaces from '../../interfaces';
import {BackService} from "../../back.service";


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  arr: Array<interfaces.Cargo> = [
    {
      name: 'first',
      weight: 16,
      type: 'большой',
    },
    {
      name: 'second',
      weight: 1323,
      type: 'small',
    },
  ];
  departure_address: string;
  destination_address: string;

  constructor(public backService: BackService,
    public dialogRef: MatDialogRef<CreateOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

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
      start: this.departure_address,
      finish: this.destination_address
    });
  }

  elem: interfaces.Order = {
    order_cargos: this.arr,
    departure_address: 'NEW YORK',
    destination_address: 'SARATOV',
  };

  ngOnInit(): void {
    // this.backService.addOrder(this.elem).subscribe(resp => {
    //   console.log(resp);
    // });
  }

}
