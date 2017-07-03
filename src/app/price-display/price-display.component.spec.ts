import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDisplayComponent } from './price-display.component';

describe('PriceDisplayComponent', () => {
  let component: PriceDisplayComponent;
  let fixture: ComponentFixture<PriceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
