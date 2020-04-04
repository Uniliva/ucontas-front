import { NgModule, LOCALE_ID } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import localePt from "@angular/common/locales/pt";
import { CommonModule, DatePipe, registerLocaleData } from "@angular/common";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { BillEditorComponent } from "./bill-editor/bill-editor.component";
import { BillDashComponent } from "./bill-dash/bill-dash.component";

registerLocaleData(localePt, "pt-BR");

@NgModule({
  declarations: [BillEditorComponent, BillDashComponent],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  exports: [BillEditorComponent, BillDashComponent],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }, DatePipe],
})
export class BillsModule {}
