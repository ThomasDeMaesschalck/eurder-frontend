import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {Item} from "../models/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private _itemsUrl: string;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
    this._itemsUrl = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this._itemsUrl);
  }

  getById(id: string): Observable<Item> {
    return this.http.get<Item>(`${this._itemsUrl}/${id}`);
  }

  save(item: Item): Observable<Item> {
    if (item.id) {
      return this.updateItem(item);
    }
    return this.makeNewItem(item);
  }

  makeNewItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this._itemsUrl, item, this.httpOptions).pipe(
      catchError(this.handleError<Item>('save'))
    );
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this._itemsUrl}/${item.id}`, item, this.httpOptions).pipe(
      catchError(this.handleError<Item>('save'))
    );
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
