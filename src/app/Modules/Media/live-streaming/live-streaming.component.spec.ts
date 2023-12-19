/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LiveStreamingComponent } from './live-streaming.component';

describe('LiveStreamingComponent', () => {
  let component: LiveStreamingComponent;
  let fixture: ComponentFixture<LiveStreamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStreamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
