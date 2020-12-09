import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityTabComponent } from './facility-tab.component';

describe('FacilityTabComponent', () => {
  let component: FacilityTabComponent;
  let fixture: ComponentFixture<FacilityTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
