import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuComponent } from './demo-form-sku.component';

describe('DemoFormSkuComponent', () => {
  let component: DemoFormSkuComponent;
  let fixture: ComponentFixture<DemoFormSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
