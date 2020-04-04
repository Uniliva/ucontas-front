import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesDashComponent } from './categories-dash/categories-dash.component';
import { CategoryEditorComponent } from './category-editor/category-editor.component';



@NgModule({
  declarations: [CategoriesDashComponent, CategoryEditorComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CategoriesDashComponent, CategoryEditorComponent
  ]
})
export class CategoryModule { }
