import {Component, Inject, OnInit} from '@angular/core';
import {Cargo} from '../../interfaces';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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

  constructor(
    public dialogRef: MatDialogRef<CreateTransitComponent>,
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
