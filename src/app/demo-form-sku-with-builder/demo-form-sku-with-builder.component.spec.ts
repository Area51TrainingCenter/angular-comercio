import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder.component';

describe('DemoFormSkuWithBuilderComponent', () => {
  let component: DemoFormSkuWithBuilderComponent;
  let fixture: ComponentFixture<DemoFormSkuWithBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuWithBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuWithBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
