import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Cargo} from '../../interfaces';
import * as interfaces from '../../interfaces';
import {BackService} from "../../back.service";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  constructor(
    private backService: BackService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  towns: Array<string> = [
    'Москва',
    'Санкт-Петербург',
    'Нягань',
    'Тверь',
    'Стальск kekw'
  ];

  elem: interfaces.Order = {
    order_cargos: [
      {
        name: 'Киберпук',
        weight: 8,
        type: 'Обычный',
      }
    ],
    departure_address: 'Москва',
    destination_address: 'Тверь',
  };

  addCargo(): void {
    this.elem.order_cargos.push({
      name: 'Ещё один груз',
      weight: 8,
      type: 'Обычный',
    });
  }

  apply(): void {
    this.backService.addOrder(this.elem).subscribe(res => {
      this.snackBar.open('Заказ создан!', '', {
        duration: 3000,
      });
      console.log('New order', res);
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
    // this.backService.addOrder(this.elem).subscribe(resp => {
    //   console.log(resp);
    // });
  }

}
