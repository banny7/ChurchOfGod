/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurBeliefComponent } from './our-belief.component';

describe('OurBeliefComponent', () => {
  let component: OurBeliefComponent;
  let fixture: ComponentFixture<OurBeliefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurBeliefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
