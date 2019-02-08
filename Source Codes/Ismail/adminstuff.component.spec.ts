import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstuffComponent } from './adminstuff.component';

describe('AdminstuffComponent', () => {
  let component: AdminstuffComponent;
  let fixture: ComponentFixture<AdminstuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
