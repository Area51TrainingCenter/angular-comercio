import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchExampleComponent } from './ng-switch-example.component';

describe('NgSwitchExampleComponent', () => {
  let component: NgSwitchExampleComponent;
  let fixture: ComponentFixture<NgSwitchExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
