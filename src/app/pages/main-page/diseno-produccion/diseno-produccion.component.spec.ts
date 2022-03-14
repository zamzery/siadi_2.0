/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DisenoProduccionComponent } from './diseno-produccion.component';

describe('DisenoProduccionComponent', () => {
  let component: DisenoProduccionComponent;
  let fixture: ComponentFixture<DisenoProduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisenoProduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
