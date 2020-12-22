import {Component, Inject, OnInit} from '@angular/core';
import * as interfaces from '../../interfaces';
import {BackService} from "../../back.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.scss']
})
export class CreateDriverComponent implements OnInit {

  constructor(
    private backService: BackService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  elem: interfaces.Driver = {
    name: 'Владислав Синотов',
    phone_number: '+7 (777) 777-77-77',
    branch: null,
  };

  dataBranch: Array<interfaces.Branch> = null;

  apply(): void {
    this.backService.addDriver(this.elem).subscribe((res) => {
      this.snackBar.open('Водитель добавлен!', '', {
        duration: 3000,
      });
      console.log('New driver', res);
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
    this.backService.getAllBranches().subscribe(res => {
      this.dataBranch = res;
    });
    // this.backService.addCarPark(this.elem).subscribe(resp => {
    //   console.log(resp);
    // });
  }

}
