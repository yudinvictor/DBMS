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


import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  public options: any = {
    chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Диаграмма распределения стартовых городов'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [{
          name: 'Города',
          colorByPoint: true,
          data: [{
            name: 'Москва',
            y: 61.41,
            sliced: true,
            selected: true
          }, {
            name: 'Санкт-Петербург',
            y: 11.84
          }, {
            name: 'Екатеринбург',
            y: 10.85
          }, {
            name: 'Новосибирск',
            y: 4.67
          }, {
            name: 'Нягань',
            y: 4.18
          }, {
            name: 'Другие',
            y: 7.05
          }]
        }]
  };

  // chart = new Chart({
  //
  // });

  chart2 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Кол-во новых заказов от дня'
    },
    xAxis: {
      categories: ['15 Dec', '16 Dec', '17 Dec', '18 Dec', '19 Dec', '20 Dec', '21 Dec', '22 Dec']
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        type: 'line',
        data: [5, 6, 5, 7, 3, 9, 7, 2]
      }
    ]
  });
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
    Highcharts.chart('chart1', this.options);
    //this.openCreateBranch();
  }
}
