import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class NotificatorService {
  constructor(private toastr: ToastrService) {}

  error(error) {
    if (error.message) {
      this.toastr.error(error.message, "");
    } else {
      this.toastr.error("an unexpected error occurred", "");
    }
  }

  sucess(msg) {
    this.toastr.success(msg, "");
  }
}
