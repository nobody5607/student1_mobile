import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScorePage } from './test-score.page';

describe('TestScorePage', () => {
  let component: TestScorePage;
  let fixture: ComponentFixture<TestScorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestScorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
