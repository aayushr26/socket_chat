import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationForgotComponent } from './confirmation-forgot.component';

describe('ConfirmationForgotComponent', () => {
  let component: ConfirmationForgotComponent;
  let fixture: ComponentFixture<ConfirmationForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
