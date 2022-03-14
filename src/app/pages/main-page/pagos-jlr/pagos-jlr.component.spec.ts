/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagosJlrComponent } from './pagos-jlr.component';

describe('PagosJlrComponent', () => {
  let component: PagosJlrComponent;
  let fixture: ComponentFixture<PagosJlrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosJlrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosJlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
