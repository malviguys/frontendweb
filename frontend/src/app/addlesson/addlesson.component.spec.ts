/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddlessonComponent } from './addlesson.component';

describe('AddlessonComponent', () => {
  let component: AddlessonComponent;
  let fixture: ComponentFixture<AddlessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
