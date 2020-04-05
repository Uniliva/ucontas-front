import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BillEditorComponent } from "./modules/bills/bill-editor/bill-editor.component";
import { BillDashComponent } from "./modules/bills/bill-dash/bill-dash.component";
import { DashComponent } from "./modules/dashboard/dash/dash.component";
import { CategoryEditorComponent } from "./modules/category/category-editor/category-editor.component";
import { CategoriesDashComponent } from "./modules/category/categories-dash/categories-dash.component";

const routes: Routes = [
  { path: "", component: DashComponent },
  { path: "dash", component: DashComponent },
  { path: "bills", component: BillDashComponent },
  { path: "bill-editor/new", component: BillEditorComponent },
  { path: "bill-editor/:id", component: BillEditorComponent },
  { path: "categories", component: CategoriesDashComponent },
  { path: "category-editor/new", component: CategoryEditorComponent },
  { path: "category-editor/:id", component: CategoryEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
