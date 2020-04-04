import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "./../../../environments/environment.prod";
import { Category } from "./../../shared/model/category";

import { NotificatorService } from "./../../core/services/notificator.service";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  _url = `${environment.base_url}/v1/categories`;

  constructor(
    private _http: HttpClient,
    private _notificator: NotificatorService
  ) {}

  findAll() {
    return this._http.get<Category[]>(this._url).pipe(
      catchError((err) => {
        this._notificator.error(err.error);
        throw err;
      })
    );
  }

  findByID(id): Observable<any> {
    return this._http.get<Category>(`${this._url}/${id}`).pipe(
      catchError((err) => {
        this._notificator.error(err.error);
        throw err;
      })
    );
  }

  save(category: Category) {
    return this._http.post<Category>(this._url, category).pipe(
      catchError((err) => {
        this._notificator.error(err.error);
        throw err;
      })
    );
  }

  deleteByID(id) {
    return this._http.delete(`${this._url}/${id}`).pipe(
      catchError((err) => {
        this._notificator.error(err.error);
        throw err;
      })
    );
  }

  update(category: Category) {
    return this._http.put<Category>(this._url, category).pipe(
      catchError((err) => {
        this._notificator.error(err.error);
        throw err;
      })
    );
  }
}
