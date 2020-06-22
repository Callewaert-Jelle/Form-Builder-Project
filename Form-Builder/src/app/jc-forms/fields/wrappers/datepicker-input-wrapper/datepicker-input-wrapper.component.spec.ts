import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerInputWrapperComponent } from './datepicker-input-wrapper.component';

describe('DatepickerInputWrapperComponent', () => {
  let component: DatepickerInputWrapperComponent;
  let fixture: ComponentFixture<DatepickerInputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerInputWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
