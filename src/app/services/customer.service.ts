import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, map, Observable, of} from "rxjs";
import {Customer} from "../models/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private _customersUrl: string;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
    this._customersUrl = `${environment.backendUrl}/customers`;
  }

  getCustomers(): Observable<any> {
    return this.http.get<Customer[]>(this._customersUrl);
  }

  getById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this._customersUrl}/${id}`);
  }

  save(customer: Customer): Observable<Customer> {
    if (customer.id) {
      return this.updateCustomer(customer);
    }
    return this.makeNewCustomer(customer);
  }

  makeNewCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this._customersUrl, customer, this.httpOptions).pipe(
      catchError(this.handleError<Customer>('save'))
    );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this._customersUrl}/${customer.id}`, customer, this.httpOptions).pipe(
      catchError(this.handleError<Customer>('save'))
    );
  }

  searchCustomers(term: string): Observable<Customer[]> {
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    return this.http.get<Customer[]>(`${this._customersUrl}/?name=${term}`)
      .pipe(
        catchError(this.handleError<Customer[]>('searchCustomers', [])),
        map(customers => customers.filter(customer => customer.lastname.toLocaleLowerCase().startsWith(term.toLocaleLowerCase()))
        ));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
