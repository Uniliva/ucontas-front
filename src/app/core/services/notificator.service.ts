import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class NotificatorService {
  constructor() {}

  error(error) {
    console.log("Ocorreu um erro!");
  }

  sucess(msg) {
    console.log("Sucesso!");
  }
}
