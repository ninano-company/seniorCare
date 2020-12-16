import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListTableComponent } from './activity-list-table.component';

describe('ActivityListTableComponent', () => {
  let component: ActivityListTableComponent;
  let fixture: ComponentFixture<ActivityListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
