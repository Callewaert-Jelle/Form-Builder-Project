import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputWrapperComponent } from './text-input-wrapper.component';

describe('TextInputWrapperComponent', () => {
  let component: TextInputWrapperComponent;
  let fixture: ComponentFixture<TextInputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
