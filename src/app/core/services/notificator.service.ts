import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NotificatorService {
  constructor() {}

  error(error) {
    console.log(error.message);
  }

  sucess(msg) {
    console.log(msg);
  }
}
