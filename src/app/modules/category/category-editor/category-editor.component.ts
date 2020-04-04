import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { faReply, faSave  } from '@fortawesome/free-solid-svg-icons';

import { Category } from "./../../../shared/model/category";

import { NotificatorService } from "./../../../core/services/notificator.service";
import { CategoryService } from "./../category.service";


@Component({
  selector: "app-category-editor",
  templateUrl: "./category-editor.component.html",
  styleUrls: ["./category-editor.component.css"],
})
export class CategoryEditorComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _service: CategoryService,
    private _router: Router,
    private _notificator: NotificatorService,
    private _activeRouter: ActivatedRoute
  ) {}

  faReply = faReply;
  faSave = faSave ;

  title = "New category";
  formCategory: FormGroup;
  category: Category;
  private _isEditMode = false;
  private _category = new Category();

  ngOnInit(): void {
    this._loadForm();

    let id = this._activeRouter.snapshot.params["id"];

    if (id) {
      this._service.findByID(id).subscribe((data) => {
        this.title = "Edit category";
        this._isEditMode = true;
        this._category = data;
        this._loadForm();
      });
    }
  }

  save() {
    if (this._isEditMode) {
      this._update();
    } else {
      this._save();
    }
  }

  private _save() {
    this._service.save(this.formCategory.value)
      .subscribe(
        (data) => {
          this._notificator.sucess(data);
          this._cleanForm();
        }
      )
  }


  private _update() {
    this._service.update(this.formCategory.value)
      .subscribe(
        (data) => {
          this._notificator.sucess(data);
          this._cleanForm();
        }
      )
  }

  private _cleanForm() {
    this.formCategory.reset();
    Object.keys(this.formCategory.controls).forEach(key => {
      this.formCategory.get(key).setErrors(null);
    });
  }


  private _loadForm() {
    this.formCategory = this._fb.group({
      id: [this._category.id, null],
      name: [
        this._category.name,
        [Validators.minLength(5), Validators.required],
      ],
    });
  }

  goBack() {
    this._router.navigate(['categories']);
  }

}
