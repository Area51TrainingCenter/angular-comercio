import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDepartmentComponent } from './product-department.component';

describe('ProductDepartmentComponent', () => {
  let component: ProductDepartmentComponent;
  let fixture: ComponentFixture<ProductDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
