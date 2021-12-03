import {NgModule} from '@angular/core';
import {ItemsOverviewComponent} from "./item/items-overview/items-overview/items-overview.component";
import {RouterModule, Routes} from "@angular/router";
import {ItemEditComponent} from "./item/item-edit/item-edit.component";
import {ItemDetailsComponent} from "./item/item-details/item-details/item-details.component";
import {CustomerOverviewComponent} from "./customer/customer-overview/customer-overview.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {CustomerDetailsComponent} from "./customer/customer-details/customer-details.component";

const routes: Routes = [
  {path: '', component: ItemsOverviewComponent},
  {path: 'items/:id/edit', component: ItemEditComponent},
  {path: 'items/:id', component: ItemDetailsComponent},
  {path: 'customers', component: CustomerOverviewComponent},
  {path: 'customers/:id/edit', component: CustomerEditComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
