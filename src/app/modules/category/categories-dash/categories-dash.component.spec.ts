import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDashComponent } from './categories-dash.component';

describe('CategoriesDashComponent', () => {
  let component: CategoriesDashComponent;
  let fixture: ComponentFixture<CategoriesDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
