import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Cargo} from '../../interfaces';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  arr: Array<Cargo> = [
    {
      name: '123',
      weight: null,
      type: null,
    },
  ];
  start: string;
  finish: string;

  constructor(
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
      start: this.start,
      finish: this.finish
    });
  }

  ngOnInit(): void {
  }

}
