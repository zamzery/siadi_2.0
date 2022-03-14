/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacturasIconogramaComponent } from './facturas-iconograma.component';

describe('FacturasIconogramaComponent', () => {
  let component: FacturasIconogramaComponent;
  let fixture: ComponentFixture<FacturasIconogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasIconogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasIconogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
