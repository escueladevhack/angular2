/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmotionsListerComponent } from './emotions-lister.component';

describe('EmotionsListerComponent', () => {
  let component: EmotionsListerComponent;
  let fixture: ComponentFixture<EmotionsListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionsListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionsListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
