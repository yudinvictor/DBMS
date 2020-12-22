import {Component, Inject, OnInit} from '@angular/core';
import * as interfaces from '../../interfaces';
import {BackService} from '../../back.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-carpark',
  templateUrl: './create-carpark.component.html',
  styleUrls: ['./create-carpark.component.scss']
})
export class CreateCarparkComponent implements OnInit {

  constructor(
    private backService: BackService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateCarparkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  elem: interfaces.CarPark = {
    address: 'test_address',
    branch: null,
  };

  dataBranch: Array<interfaces.Branch> = null;

  apply(): void {
    this.backService.addCarPark(this.elem).subscribe((res) => {
      this.snackBar.open('Автопарк создан!', '', {
        duration: 3000,
      });
      console.log('New carpark', res);
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
