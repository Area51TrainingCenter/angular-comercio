import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForExampleComponent } from './ng-for-example.component';

describe('NgForExampleComponent', () => {
  let component: NgForExampleComponent;
  let fixture: ComponentFixture<NgForExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
