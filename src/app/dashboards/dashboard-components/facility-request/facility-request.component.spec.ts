import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityRequestComponent } from './facility-request.component';

describe('FacilityRequestComponent', () => {
  let component: FacilityRequestComponent;
  let fixture: ComponentFixture<FacilityRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
