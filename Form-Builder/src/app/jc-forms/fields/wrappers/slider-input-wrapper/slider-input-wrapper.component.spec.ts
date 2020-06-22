import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderInputWrapperComponent } from './slider-input-wrapper.component';

describe('SliderInputWrapperComponent', () => {
  let component: SliderInputWrapperComponent;
  let fixture: ComponentFixture<SliderInputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderInputWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
