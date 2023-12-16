/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TakeMeToComponent } from './take-me-to.component';

describe('TakeMeToComponent', () => {
  let component: TakeMeToComponent;
  let fixture: ComponentFixture<TakeMeToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeMeToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeMeToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
