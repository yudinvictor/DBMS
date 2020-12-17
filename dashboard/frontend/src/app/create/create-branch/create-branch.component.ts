import {Component, Inject, OnInit} from '@angular/core';
import {Cargo} from '../../interfaces';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BackService} from '../../back.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.scss']
})
export class CreateBranchComponent implements OnInit {

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
    public dialogRef: MatDialogRef<CreateBranchComponent>,
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
    this.backService.getAllCargo().subscribe(res => {
      console.log(res);
    });
  }

}
