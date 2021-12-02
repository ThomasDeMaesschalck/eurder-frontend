import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {max, of} from "rxjs";
import {map, switchMap} from 'rxjs/operators';
import {Item} from "../../models/Item";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})

export class ItemEditComponent implements OnInit {

  id: string | undefined;
  item!: Item | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') {
            this.item = <Item>{
              name: '',
              description: '',
              price: 0,
              amountOfStock: 0
            };
            return of(this.item);
          }
          return this.itemService.getById(id);
        })
      )
      .subscribe(item => {
        this.item = item;
      });
  }

  save() {
    this.itemService.save(this.item!).subscribe(
      itemFromBackend => {
        this.item = itemFromBackend;
        this.router.navigate(['items', this.item.id]);
      }
    );
  }


  cancel() {
    this.router.navigate(['']);
  }

  countCharactersLeft(input: string): number {
    const maxChars = 255;

    if (input.length === maxChars) {
      return 0;
    }
    return maxChars - input.length;
  }
}
