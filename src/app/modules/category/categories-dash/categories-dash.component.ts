
import { Component, OnInit } from '@angular/core';

import { Category } from './../../../shared/model/category';
import { CategoryService } from './../category.service';

import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories-dash',
  templateUrl: './categories-dash.component.html',
  styleUrls: ['./categories-dash.component.css']
})
export class CategoriesDashComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private _service: CategoryService
  ) { }

  categories: Category[];

  ngOnInit(): void {
    this._service.findAll()
        .subscribe(data => {
          this.categories = data;
        });
  }

  edit(id){
    console.log('edit');
  }

  delete(id){
    console.log('delete');
  }


}
