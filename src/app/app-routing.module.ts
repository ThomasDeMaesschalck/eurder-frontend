import {NgModule} from '@angular/core';
import {ItemsOverviewComponent} from "./item/items-overview/items-overview/items-overview.component";
import {RouterModule, Routes} from "@angular/router";
import {ItemEditComponent} from "./item/item-edit/item-edit.component";

const routes: Routes = [
  {path: '', component: ItemsOverviewComponent},
  {path: 'items/:id', component: ItemEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
