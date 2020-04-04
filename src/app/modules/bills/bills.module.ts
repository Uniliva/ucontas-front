import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { BillEditorComponent } from './bill-editor/bill-editor.component';
import { BillDashComponent } from './bill-dash/bill-dash.component';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [BillEditorComponent, BillDashComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ], exports:[
    BillEditorComponent, BillDashComponent
  ], providers:[
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    DatePipe
  ]
})
export class BillsModule { }
