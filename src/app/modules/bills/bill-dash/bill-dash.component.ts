import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Bill } from "./../../../shared/model/bill";

import { BillService } from "./../bill.service";
import { NotificatorService } from "./../../../core/services/notificator.service";

@Component({
  selector: "app-bill-dash",
  templateUrl: "./bill-dash.component.html",
  styleUrls: ["./bill-dash.component.css"],
})
export class BillDashComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;

  constructor(
    private _service: BillService,
    private _router: Router,
    private _notificator: NotificatorService
  ) {}

  bills: Bill[];

  ngOnInit(): void {
    this._loadData();
  }

  edit(id) {
    console.log("edit");
    this._router.navigate([`bill-editor/${id}`]);
  }

  delete(id) {
    this._service.deleteByID(id).subscribe((data) => {
      this._notificator.sucess("Bill removed successfully!!");
      this._loadData();
    });
  }

  newBill() {
    this._router.navigate([`bill-editor/new`]);
  }

  private _loadData() {
    this._service.findAll().subscribe((data) => {
      this.bills = data;
    });
  }
}
