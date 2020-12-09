import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityUserComponent } from './facility-user.component';

describe('FacilityUserComponent', () => {
  let component: FacilityUserComponent;
  let fixture: ComponentFixture<FacilityUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
