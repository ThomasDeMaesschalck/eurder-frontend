import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Item} from "../model/Item";

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


}
