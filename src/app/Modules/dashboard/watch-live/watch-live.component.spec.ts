/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WatchLiveComponent } from './watch-live.component';

describe('WatchLiveComponent', () => {
  let component: WatchLiveComponent;
  let fixture: ComponentFixture<WatchLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
