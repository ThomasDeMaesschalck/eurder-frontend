import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemsOverviewComponent} from './item/items-overview/items-overview/items-overview.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { StockStatusPipe } from './pipes/stock-status.pipe';
import { ItemSearchComponent } from './item/item-search/item-search.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemDetailsComponent } from './item/item-details/item-details/item-details.component';
import { CustomerOverviewComponent } from './customer/customer-overview/customer-overview.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerSearchComponent } from './customer/customer-search/customer-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsOverviewComponent,
    StockStatusPipe,
    ItemSearchComponent,
    ItemEditComponent,
    ItemDetailsComponent,
    CustomerOverviewComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    CustomerSearchComponent
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
