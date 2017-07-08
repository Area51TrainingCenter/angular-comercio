import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleExampleComponent } from './ng-style-example.component';

describe('NgStyleExampleComponent', () => {
  let component: NgStyleExampleComponent;
  let fixture: ComponentFixture<NgStyleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
