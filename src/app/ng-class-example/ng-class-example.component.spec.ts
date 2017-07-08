import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassExampleComponent } from './ng-class-example.component';

describe('NgClassExampleComponent', () => {
  let component: NgClassExampleComponent;
  let fixture: ComponentFixture<NgClassExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
