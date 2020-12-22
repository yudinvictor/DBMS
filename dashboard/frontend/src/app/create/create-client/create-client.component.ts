import {Component, Inject, OnInit} from '@angular/core';
import * as interfaces from '../../interfaces';
import {BackService} from '../../back.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  constructor(
    private backService: BackService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreateClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  elem: interfaces.Client = {
    name: 'test_name',
    phone_number: 'test_phone number',
  };

  apply(): void {
    this.backService.addClient(this.elem).subscribe((res) => {
      this.snackBar.open('Клиент добавлен!', '', {
        duration: 3000,
      });
      console.log('New client', res);
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {
    // this.backService.addClient(this.elem).subscribe(resp => {
    //   console.log(resp);
    // });
  }
}
