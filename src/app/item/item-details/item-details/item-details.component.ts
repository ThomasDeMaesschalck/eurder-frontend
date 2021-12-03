import { Component, OnInit } from '@angular/core';
import {Item} from "../../../models/Item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../../services/item.service";
import {map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  id: string | undefined;
  item!: Item | undefined;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private itemService: ItemService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          return this.itemService.getById(id);
        })
      )
      .subscribe(item => {
        this.item = item;
      });
  }

  goBack() {
    this.router.navigate(['']);
  }
}
