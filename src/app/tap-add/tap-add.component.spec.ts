/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TapAddComponent } from './tap-add.component';

describe('TapAddComponent', () => {
  let component: TapAddComponent;
  let fixture: ComponentFixture<TapAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
