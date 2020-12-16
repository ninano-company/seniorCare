import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPhotoFilterComponent } from './activity-photo-filter.component';

describe('ActivityPhotoFilterComponent', () => {
  let component: ActivityPhotoFilterComponent;
  let fixture: ComponentFixture<ActivityPhotoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPhotoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPhotoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
