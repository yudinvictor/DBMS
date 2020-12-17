import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateOrderComponent} from '../create/create-order/create-order.component';
import {CreateTransitComponent} from '../create/create-transit/create-transit.component';
import { Chart } from 'angular-highcharts';
import {CreateBranchComponent} from '../create/create-branch/create-branch.component';
import {CreateCarparkComponent} from '../create/create-carpark/create-carpark.component';
import {CreateTransportComponent} from '../create/create-transport/create-transport.component';
import {CreateDriverComponent} from '../create/create-driver/create-driver.component';
import {CreateClientComponent} from '../create/create-client/create-client.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  // chart = new Chart({
  //   chart: {
  //     plotBackgroundColor: null,
  //     plotBorderWidth: null,
  //     plotShadow: false,
  //     type: 'pie'
  //   },
  //   title: {
  //     text: 'Browser market shares in January, 2018'
  //   },
  //   tooltip: {
  //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //   },
  //   accessibility: {
  //     point: {
  //       valueSuffix: '%'
  //     }
  //   },
  //   plotOptions: {
  //     pie: {
  //       allowPointSelect: true,
  //       cursor: 'pointer',
  //       dataLabels: {
  //         enabled: false
  //       },
  //       showInLegend: true
  //     }
  //   },
  //   series: [{
  //     name: 'Brands',
  //     colorByPoint: true,
  //     data: [{
  //       name: 'Chrome',
  //       y: 61.41,
  //       sliced: true,
  //       selected: true
  //     }, {
  //       name: 'Internet Explorer',
  //       y: 11.84
  //     }, {
  //       name: 'Firefox',
  //       y: 10.85
  //     }, {
  //       name: 'Edge',
  //       y: 4.67
  //     }, {
  //       name: 'Safari',
  //       y: 4.18
  //     }, {
  //       name: 'Other',
  //       y: 7.05
  //     }]
  //   }]
  // });
  //
  // chart2 = new Chart({
  //   chart: {
  //     type: 'line'
  //   },
  //   title: {
  //     text: 'Linechart'
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   series: [
  //     {
  //       name: 'Line 1',
  //       data: [1, 2, 3]
  //     }
  //   ]
  // });
  configPopup = {
    maxWidth: '100vw',
    width: '100vw',
    height: '100vh',
    autoFocus: false,
  };

  openCreateOrder(): void {
    const dialogRef = this.dialog.open(CreateOrderComponent, this.configPopup);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openCreateTransit(): void {
    const dialogRef = this.dialog.open(CreateTransitComponent, this.configPopup);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openCreateBranch(): void {
    const dialogRef = this.dialog.open(CreateBranchComponent, this.configPopup);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openCreateCarPark(): void {
    const dialogRef = this.dialog.open(CreateCarparkComponent, this.configPopup);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openCreateTransport(): void {
    const dialogRef = this.dialog.open(CreateTransportComponent, this.configPopup);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openCreateDriver(): void {
    const dialogRef = this.dialog.open(CreateDriverComponent, this.configPopup);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openCreateClient(): void {
    const dialogRef = this.dialog.open(CreateClientComponent, this.configPopup);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.openCreateBranch();
  }

}
