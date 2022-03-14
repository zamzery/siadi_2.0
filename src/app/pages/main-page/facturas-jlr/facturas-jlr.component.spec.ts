/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacturasJlrComponent } from './facturas-jlr.component';

describe('FacturasJlrComponent', () => {
  let component: FacturasJlrComponent;
  let fixture: ComponentFixture<FacturasJlrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasJlrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasJlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
