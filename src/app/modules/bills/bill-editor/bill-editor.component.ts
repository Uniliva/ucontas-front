import { DateUtilsService } from "./../../../core/services/date-utils.service";
import { Category } from "./../../../shared/model/category";
import { CategoryService } from "./../../category/category.service";
import { Bill } from "./../../../shared/model/bill";
import { faReply, faSave } from "@fortawesome/free-solid-svg-icons";
import { NotificatorService } from "./../../../core/services/notificator.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BillService } from "./../bill.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bill-editor",
  templateUrl: "./bill-editor.component.html",
  styleUrls: ["./bill-editor.component.css"],
})
export class BillEditorComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private _service: BillService,
    private _serviceCategory: CategoryService,
    private _router: Router,
    private _notificator: NotificatorService,
    private _activeRouter: ActivatedRoute,
    private _dateUtil: DateUtilsService
  ) {}

  faReply = faReply;
  faSave = faSave;

  title = "New Bill";
  formBill: FormGroup;
  bill: Bill;
  private _isEditMode = false;
  private _bill = new Bill();
  categories: Category[];

  ngOnInit(): void {
    this._loadForm();

    let id = this._activeRouter.snapshot.params["id"];

    if (id) {
      this._service.findByID(id).subscribe((data) => {
        this.title = "Edit bill";
        this._isEditMode = true;
        this._bill = this._convertDateBill(data);
        this._loadForm();
      });
    }

    this._listCategories();
  }

  compareFunction(o1: any, o2: any) {
    return o1?.id == o2?.id;
  }

  save() {
    if (this._isEditMode) {
      this._update();
    } else {
      this._save();
    }
  }

  goBack() {
    this._router.navigate(["bills"]);
  }

  private _listCategories() {
    this._serviceCategory
      .findAll()
      .subscribe((data) => (this.categories = data));
  }

  private _save() {
    this._service.save(this.formBill.value).subscribe((data) => {
      this._notificator.sucess(data);
      this._cleanForm();
    });
  }

  private _update() {
    this._service.update(this.formBill.value).subscribe((data) => {
      this._notificator.sucess(data);
      this._cleanForm();
    });
  }

  private _cleanForm() {
    this.formBill.reset();
    Object.keys(this.formBill.controls).forEach((key) => {
      this.formBill.get(key).setErrors(null);
    });
  }

  private _loadForm() {
    this.formBill = this._fb.group({
      id: [this._bill.id, null],
      description: [
        this._bill.description,
        [Validators.minLength(5), Validators.required],
      ],
      value: [this._bill.value, [Validators.required]],
      category: [this._bill.category, [Validators.required]],
      dateBill: [this._bill.dateBill, [Validators.required]],
    });

    console.log(this.formBill);
  }

  private _convertDateBill(bill: Bill) {
    const nBill = {
      ...bill,
      dateBill: this._dateUtil.convertDateStringWithDashToDate(
        bill.dateBill.toString()
      ),
    };
    return nBill;
  }
}
