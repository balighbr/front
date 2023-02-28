import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcategoriesComponent } from './viewcategorie.component';

describe('ViewcategorieComponent', () => {
  let component: ViewcategoriesComponent;
  let fixture: ComponentFixture<ViewcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
