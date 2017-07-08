import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNonBindableExampleComponent } from './ng-non-bindable-example.component';

describe('NgNonBindableExampleComponent', () => {
  let component: NgNonBindableExampleComponent;
  let fixture: ComponentFixture<NgNonBindableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNonBindableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNonBindableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
