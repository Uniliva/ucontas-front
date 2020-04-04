import { DashComponent } from './modules/dashboard/dash/dash.component';
import { CategoryEditorComponent } from './modules/category/category-editor/category-editor.component';
import { CategoriesDashComponent } from './modules/category/categories-dash/categories-dash.component';
import { BillEditorComponent } from './modules/bills/bill-editor/bill-editor.component';
import { BillDashComponent } from './modules/bills/bill-dash/bill-dash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'dash', component: DashComponent },
  { path: 'bills', component: BillDashComponent },
  { path: 'bill-editor', component: BillEditorComponent },
  { path: 'categories', component: CategoriesDashComponent },
  { path: 'category-editor', component: CategoryEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
