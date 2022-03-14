/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecepcionProductosComponent } from './recepcion-productos.component';

describe('RecepcionProductosComponent', () => {
  let component: RecepcionProductosComponent;
  let fixture: ComponentFixture<RecepcionProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcionProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
