/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TapTileComponent } from './tap-tile.component';

describe('TapTileComponent', () => {
  let component: TapTileComponent;
  let fixture: ComponentFixture<TapTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
