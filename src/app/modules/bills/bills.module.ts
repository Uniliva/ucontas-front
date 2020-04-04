import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillEditorComponent } from './bill-editor/bill-editor.component';
import { BillDashComponent } from './bill-dash/bill-dash.component';



@NgModule({
  declarations: [BillEditorComponent, BillDashComponent],
  imports: [
    CommonModule
  ], exports:[
    BillEditorComponent, BillDashComponent
  ]
})
export class BillsModule { }
