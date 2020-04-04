import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDashComponent } from './bill-dash.component';

describe('BillDashComponent', () => {
  let component: BillDashComponent;
  let fixture: ComponentFixture<BillDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
