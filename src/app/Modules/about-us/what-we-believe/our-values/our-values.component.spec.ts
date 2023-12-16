/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurValuesComponent } from './our-values.component';

describe('OurValuesComponent', () => {
  let component: OurValuesComponent;
  let fixture: ComponentFixture<OurValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
