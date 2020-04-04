import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesDashComponent } from './categories-dash/categories-dash.component';
import { CategoryEditorComponent } from './category-editor/category-editor.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CategoriesDashComponent, CategoryEditorComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports:[
    CategoriesDashComponent, CategoryEditorComponent
  ]
})
export class CategoryModule { }
