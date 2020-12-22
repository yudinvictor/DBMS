import {Component, Inject, OnInit} from '@angular/core';
import {Cargo} from '../../interfaces';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BackService} from '../../back.service';
import * as interfaces from '../../interfaces';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.scss']
})
export class CreateBranchComponent implements OnInit {

  elem: interfaces.Branch = {
    address: '',
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

  constructor(
    private backService: BackService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateBranchComponent>,
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
    this.backService.addBranch(this.elem).subscribe((res) => {
      this.snackBar.open('Филиал создан!', '', {
        duration: 3000,
      });
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
    // this.backService.getAllCargo().subscribe(res => {
    //   console.log(res);
    // });


    // this.backService.addBranch(this.elem).subscribe(resp => {
    //   console.log(resp);
    // })
  }

}
