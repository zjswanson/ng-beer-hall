/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TapEditComponent } from './tap-edit.component';

describe('TapEditComponent', () => {
  let component: TapEditComponent;
  let fixture: ComponentFixture<TapEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
