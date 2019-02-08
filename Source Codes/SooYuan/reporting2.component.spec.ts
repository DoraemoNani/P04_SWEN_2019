import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reporting2Component } from './reporting2.component';

describe('Reporting2Component', () => {
  let component: Reporting2Component;
  let fixture: ComponentFixture<Reporting2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reporting2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reporting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
