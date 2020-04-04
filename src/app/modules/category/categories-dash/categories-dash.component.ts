import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Category } from "./../../../shared/model/category";

import { CategoryService } from "./../category.service";
import { NotificatorService } from "./../../../core/services/notificator.service";

@Component({
  selector: "app-categories-dash",
  templateUrl: "./categories-dash.component.html",
  styleUrls: ["./categories-dash.component.css"],
})
export class CategoriesDashComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  faPlus = faPlus;

  constructor(
    private _service: CategoryService,
    private _router: Router,
    private _notificator: NotificatorService
  ) {}

  categories: Category[];

  ngOnInit(): void {
    this._loadData();
  }

  edit(id) {
    console.log("edit");
    this._router.navigate([`category-editor/${id}`]);
  }

  delete(id) {
    this._service.deleteByID(id).subscribe((data) => {
      this._notificator.sucess("Category removed successfully!");
      this._loadData();
    });
  }

  newCategory() {
    this._router.navigate([`category-editor/new`]);
  }

  private _loadData() {
    this._service.findAll().subscribe((data) => {
      this.categories = data;
    });
  }
}
