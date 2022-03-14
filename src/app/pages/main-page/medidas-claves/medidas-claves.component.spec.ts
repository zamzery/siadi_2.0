/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MedidasClavesComponent } from './medidas-claves.component';

describe('MedidasClavesComponent', () => {
  let component: MedidasClavesComponent;
  let fixture: ComponentFixture<MedidasClavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidasClavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasClavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
