import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import {MaterialModule} from './material-module';
import { MainPageComponent } from './main-page/main-page.component';
import { CreateOrderComponent } from './create/create-order/create-order.component';
import {FormsModule} from '@angular/forms';
import { CreateTransitComponent } from './create/create-transit/create-transit.component';
import {ChartModule} from 'angular-highcharts';
import { SearchPageComponent } from './search-page/search-page.component';
import { CreateBranchComponent } from './create/create-branch/create-branch.component';
import { CreateCarparkComponent } from './create/create-carpark/create-carpark.component';
import { CreateDriverComponent } from './create/create-driver/create-driver.component';
import { CreateTransportComponent } from './create/create-transport/create-transport.component';
import { CreateClientComponent } from './create/create-client/create-client.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainPageComponent,
    CreateOrderComponent,
    CreateTransitComponent,
    SearchPageComponent,
    CreateBranchComponent,
    CreateCarparkComponent,
    CreateDriverComponent,
    CreateTransportComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ChartModule,
    HttpClientModule,
  ],
  providers: [],
  exports: [
    ChartModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
