import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemsOverviewComponent} from './item/items-overview/items-overview/items-overview.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { StockStatusPipe } from './pipes/stock-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemsOverviewComponent,
    StockStatusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
