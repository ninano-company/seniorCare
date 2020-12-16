import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPhotoComponent } from './activity-photo.component';

describe('ActivityPhotoComponent', () => {
  let component: ActivityPhotoComponent;
  let fixture: ComponentFixture<ActivityPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
