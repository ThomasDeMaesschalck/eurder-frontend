import {NgModule} from '@angular/core';
import {ItemsOverviewComponent} from "./item/items-overview/items-overview/items-overview.component";
import {RouterModule, Routes} from "@angular/router";
import {ItemEditComponent} from "./item/item-edit/item-edit.component";
import {ItemDetailsComponent} from "./item/item-details/item-details/item-details.component";

const routes: Routes = [
  {path: '', component: ItemsOverviewComponent},
  {path: 'items/:id/edit', component: ItemEditComponent},
  {path: 'items/:id', component: ItemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
