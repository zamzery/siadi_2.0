/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagosExperienciaComponent } from './pagos-experiencia.component';

describe('PagosExperienciaComponent', () => {
  let component: PagosExperienciaComponent;
  let fixture: ComponentFixture<PagosExperienciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosExperienciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
