import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListFilterComponent } from './activity-list-filter.component';

describe('ActivityListFilterComponent', () => {
  let component: ActivityListFilterComponent;
  let fixture: ComponentFixture<ActivityListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
