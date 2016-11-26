/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaListaComponent } from './la-lista.component';

describe('LaListaComponent', () => {
  let component: LaListaComponent;
  let fixture: ComponentFixture<LaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
