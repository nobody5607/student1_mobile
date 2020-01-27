import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonStartPage } from './lesson-start.page';

describe('LessonStartPage', () => {
  let component: LessonStartPage;
  let fixture: ComponentFixture<LessonStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonStartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
