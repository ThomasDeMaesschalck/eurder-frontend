import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {of} from "rxjs";
import { map, switchMap } from 'rxjs/operators';
import {Item} from "../../models/Item";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})

export class ItemEditComponent implements OnInit {

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
        if (id === 'new') {
          // @ts-ignore
          this.item = {};
          return of(this.item); }
        return this.itemService.getById(id);
      })
    )
.subscribe(item => {
    this.item = item;
  });
}

  save() {
    this.itemService.save(this.item!).subscribe(
      item => {
        this.item = item;
          this.router.navigate(['']);
        }
    );
  }


cancel() {
    this.router.navigate(['']);
  }
}
