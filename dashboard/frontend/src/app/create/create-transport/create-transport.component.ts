import {Component, Inject, OnInit} from '@angular/core';
import * as interfaces from '../../interfaces';
import {BackService} from "../../back.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-transport',
  templateUrl: './create-transport.component.html',
  styleUrls: ['./create-transport.component.scss']
})
export class CreateTransportComponent implements OnInit {

  constructor(
    private backService: BackService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateTransportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  elem: interfaces.Transport = {
    type: 'Грузовой',
    number: 'EKX',
    car_park: null,
  };

  dataCarpark: Array<interfaces.CarPark> = null;

  apply(): void {
    this.backService.addTransport(this.elem).subscribe((res) => {
      this.snackBar.open('Новый транспорт добавлен!', '', {
        duration: 3000,
      });
      console.log('New transport', res);
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
    this.backService.getAllCarParks().subscribe(res => {
      this.dataCarpark = res;
    });
  }

}
