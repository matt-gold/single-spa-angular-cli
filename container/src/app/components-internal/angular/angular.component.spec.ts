import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponent } from './angular.component';

describe('AngularComponent', () => {
  let component: AngularComponent;
  let fixture: ComponentFixture<AngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
