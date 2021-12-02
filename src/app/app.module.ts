import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemsOverviewComponent} from './item/items-overview/items-overview/items-overview.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { StockStatusPipe } from './pipes/stock-status.pipe';
import { ItemSearchComponent } from './item/item-search/item-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsOverviewComponent,
    StockStatusPipe,
    ItemSearchComponent
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
