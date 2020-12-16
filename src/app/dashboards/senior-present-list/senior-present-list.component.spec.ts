import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorPresentListComponent } from './senior-present-list.component';

describe('SeniorPresentListComponent', () => {
  let component: SeniorPresentListComponent;
  let fixture: ComponentFixture<SeniorPresentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorPresentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorPresentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
