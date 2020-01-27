import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStartPage } from './test-start.page';

describe('TestStartPage', () => {
  let component: TestStartPage;
  let fixture: ComponentFixture<TestStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
