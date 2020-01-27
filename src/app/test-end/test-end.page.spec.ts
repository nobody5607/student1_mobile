import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEndPage } from './test-end.page';

describe('TestEndPage', () => {
  let component: TestEndPage;
  let fixture: ComponentFixture<TestEndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEndPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
