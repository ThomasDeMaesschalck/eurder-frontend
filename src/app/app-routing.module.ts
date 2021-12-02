import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemsOverviewComponent} from "./item/items-overview/items-overview/items-overview.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: ItemsOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
