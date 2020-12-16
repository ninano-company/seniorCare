import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorPresentDetailComponent } from './senior-present-detail.component';

describe('SeniorPresentDetailComponent', () => {
  let component: SeniorPresentDetailComponent;
  let fixture: ComponentFixture<SeniorPresentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorPresentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorPresentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
