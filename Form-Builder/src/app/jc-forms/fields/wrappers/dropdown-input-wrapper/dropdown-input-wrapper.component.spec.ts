import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownInputWrapperComponent } from './dropdown-input-wrapper.component';

describe('DropdownInputWrapperComponent', () => {
  let component: DropdownInputWrapperComponent;
  let fixture: ComponentFixture<DropdownInputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownInputWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
