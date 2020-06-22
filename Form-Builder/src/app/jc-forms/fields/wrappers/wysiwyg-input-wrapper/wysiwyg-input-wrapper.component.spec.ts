import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwygInputWrapperComponent } from './wysiwyg-input-wrapper.component';

describe('WysiwygInputWrapperComponent', () => {
  let component: WysiwygInputWrapperComponent;
  let fixture: ComponentFixture<WysiwygInputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WysiwygInputWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
