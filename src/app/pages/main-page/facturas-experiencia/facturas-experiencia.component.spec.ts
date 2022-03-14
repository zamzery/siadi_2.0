/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacturasExperienciaComponent } from './facturas-experiencia.component';

describe('FacturasExperienciaComponent', () => {
  let component: FacturasExperienciaComponent;
  let fixture: ComponentFixture<FacturasExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
