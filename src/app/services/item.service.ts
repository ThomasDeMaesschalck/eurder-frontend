import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, filter, map, Observable, of} from "rxjs";
import {Item} from "../models/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private _itemsUrl: string;

  constructor(private http: HttpClient) {
    this._itemsUrl = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this._itemsUrl);
  }

  getByName(id: string): Observable<any> {
    return this.http.get(`${this._itemsUrl}/${id}`);
  }

  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Item[]>(`${this._itemsUrl}/?name=${term}`)
      .pipe(
      catchError(this.handleError<Item[]>('searchItems', [])),
        map(items => items.filter(item => item.name.toLocaleLowerCase().startsWith(term.toLocaleLowerCase()))
    ));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
