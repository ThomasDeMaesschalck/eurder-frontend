import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../models/Customer";
import {CustomerService} from "../../services/customer.service";
import {map, switchMap} from "rxjs/operators";
import {Item} from "../../models/Item";
import {of} from "rxjs";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  id: string | undefined;
  customer!: Customer | undefined;
  countries: string[] = ['Belgium', 'France', 'Germany'];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService) {
  }


  ngOnInit(): void {
    this.route.params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') {
            this.customer = <Customer>{
              firstname: '',
              lastname: '',
              email: {},
              address: {},
              phoneNumber: {}
            };
            return of(this.customer);
          }
          return this.customerService.getById(id);
        })
      )
      .subscribe(customer => {
        this.customer = customer;
      });
  }

  save() {
    this.customer!.email.complete = this.customer!.email.localPart + '@' + this.customer!.email.domain;
    this.customerService.save(this.customer!).subscribe(
      customerFromBackEnd => {
        this.customer = customerFromBackEnd;
        this.router.navigate(['customers', this.customer.id]);
      }
    );
  }


  cancel() {
    this.router.navigate(['customers']);
  }

}
