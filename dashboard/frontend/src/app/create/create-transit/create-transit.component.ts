import {Component, Inject, OnInit} from '@angular/core';
import {Cargo} from '../../interfaces';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import * as interfaces from '../../interfaces';
import {BackService} from "../../back.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-transit',
  templateUrl: './create-transit.component.html',
  styleUrls: ['./create-transit.component.scss']
})
export class CreateTransitComponent implements OnInit {

  constructor(
    private backService: BackService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateTransitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  towns: Array<string> = [
    'Москва',
    'Санкт-Петербург',
    'Нягань',
    'Тверь',
    'Стальск kekw'
  ];

  elem: interfaces.ReqShipping = {
    start_time: new Date(),
    stop_time: new Date(),
    departure_address: 'Москва',
    destination_address: 'Санкт-Петербург',
    transport: null,
    driver: null,
    orders: [],
  };


  arr: Array<Cargo> = [
    {
      name: '123',
      weight: null,
      type: null,
    },
  ];
  start: string;
  finish: string;

  addCargo(): void {
    this.arr.push({
      name: 'Ещё один груз',
      weight: null,
      type: null,
    });
  }

  apply(): void {
    console.log(this.elem);
    this.backService.addShipping(this.elem).subscribe((res) => {
      this.snackBar.open('Перевозка произведена!', '', {
        duration: 3000,
      });
      console.log('New shipping', res);
      this.dialogRef.close();
    });
  }

  selectId = new Set();

  toggleOrderToSet(id: number): void {
    if (this.selectId.has(id)) {
      this.selectId.delete(id);
      this.elem.orders.splice(this.elem.orders.indexOf(id), 1);
    } else {
      this.selectId.add(id);
      this.elem.orders.push(id);
    }
  }

  dataOrdersInTown: Array<interfaces.Order> = null;

  dataDrivers: Array<interfaces.Driver> = null;
  dataTransport: Array<interfaces.Transport> = null;

  changeTown(): void {
    alert(this.elem.departure_address);
    this.selectId.clear();
    this.elem.orders = [];
    this.backService.getOrderByTown(this.elem.departure_address).subscribe(res => {
      console.log(res);
      this.dataOrdersInTown = res.orders;
    });
  }

  ngOnInit(): void {
    this.backService.getAllDrivers().subscribe(res => {
      this.dataDrivers = res;
    });
    this.backService.getAllTransports().subscribe(res => {
      this.dataTransport = res;
    });
    this.backService.getOrderByTown(this.elem.departure_address).subscribe(res => {
      console.log(res);
      this.dataOrdersInTown = res.orders;
    });
    // this.backService.addShipping(this.elem).subscribe(resp => {
    //   console.log(resp);
    // });
  }

}
