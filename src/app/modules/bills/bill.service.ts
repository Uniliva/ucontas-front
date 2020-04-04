import { Injectable } from "@angular/core";

import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "./../../../environments/environment.prod";

import { Bill } from "./../../shared/model/bill";
import { NotificatorService } from "./../../core/services/notificator.service";

@Injectable({
  providedIn: "root",
})
export class BillService {
  _url = `${environment.base_url}/v1/categories`;

  constructor(
    private _http: HttpClient,
    private _notificator: NotificatorService
  ) {}

  findAll() {
    return this._http.get(this._url).pipe(
      catchError((err) => {
        this._notificator.error(err.error);
        throw err;
      })
    );
  }

  findByID(id): Observable<any> {
    return this._http.get<Bill>(`${this._url}/${id}`).pipe(
      catchError((err) => {
        this._notificator.error(err.error);
        throw err;
      })
    );
  }

  save(bill: Bill) {
    return this._http.post<Bill>(this._url, bill).pipe(
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

  update(bill: Bill) {
    return this._http.put<Bill>(this._url, bill).pipe(
      catchError((err) => {
        this._notificator.error(err.error);
        throw err;
      })
    );
  }
}
