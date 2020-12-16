import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPhotoListComponent } from './activity-photo-list.component';

describe('ActivityPhotoListComponent', () => {
  let component: ActivityPhotoListComponent;
  let fixture: ComponentFixture<ActivityPhotoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPhotoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPhotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
