/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatishAndFebiComponent } from './satish-and-febi.component';

describe('SatishAndFebiComponent', () => {
  let component: SatishAndFebiComponent;
  let fixture: ComponentFixture<SatishAndFebiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatishAndFebiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatishAndFebiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
