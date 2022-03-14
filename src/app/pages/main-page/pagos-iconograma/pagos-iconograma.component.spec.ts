/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagosIconogramaComponent } from './pagos-iconograma.component';

describe('PagosIconogramaComponent', () => {
  let component: PagosIconogramaComponent;
  let fixture: ComponentFixture<PagosIconogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosIconogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosIconogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
