import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithValidationsExplicitComponent } from './form-with-validations-explicit.component';

describe('FormWithValidationsExplicitComponent', () => {
  let component: FormWithValidationsExplicitComponent;
  let fixture: ComponentFixture<FormWithValidationsExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithValidationsExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithValidationsExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
