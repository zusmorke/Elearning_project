import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishCourseComponent } from './publish-course.component';

describe('PublishCourseComponent', () => {
  let component: PublishCourseComponent;
  let fixture: ComponentFixture<PublishCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
