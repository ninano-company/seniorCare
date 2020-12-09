import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityTimelineComponent } from './facility-timeline.component';

describe('FacilityTimelineComponent', () => {
  let component: FacilityTimelineComponent;
  let fixture: ComponentFixture<FacilityTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
