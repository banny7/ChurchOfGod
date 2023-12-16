/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhatWeHaveGoingOnComponent } from './what-we-have-going-on.component';

describe('WhatWeHaveGoingOnComponent', () => {
  let component: WhatWeHaveGoingOnComponent;
  let fixture: ComponentFixture<WhatWeHaveGoingOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeHaveGoingOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeHaveGoingOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
