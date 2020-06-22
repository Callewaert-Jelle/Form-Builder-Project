import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputWrapperComponent } from './number-input-wrapper.component';

describe('NumberInputWrapperComponent', () => {
  let component: NumberInputWrapperComponent;
  let fixture: ComponentFixture<NumberInputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberInputWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
