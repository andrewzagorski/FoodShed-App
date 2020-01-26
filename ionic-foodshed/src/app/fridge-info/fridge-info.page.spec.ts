import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeInfoPage } from './fridge-info.page';

describe('FridgeInfoPage', () => {
  let component: FridgeInfoPage;
  let fixture: ComponentFixture<FridgeInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
