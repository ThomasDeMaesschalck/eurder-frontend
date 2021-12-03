import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/Item";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../../services/item.service";
import {map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {Customer} from "../../models/Customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {


  id: string | undefined;
  customer!: Customer | undefined;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private customerService: CustomerService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          return this.customerService.getById(id);
        })
      )
      .subscribe(customer => {
        this.customer = customer;
      });
  }

  goBack() {
    this.router.navigate(['customers']);
  }
}
