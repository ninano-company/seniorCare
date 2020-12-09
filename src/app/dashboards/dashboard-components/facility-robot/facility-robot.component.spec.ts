import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityRobotComponent } from './facility-robot.component';

describe('FacilityRobotComponent', () => {
  let component: FacilityRobotComponent;
  let fixture: ComponentFixture<FacilityRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
