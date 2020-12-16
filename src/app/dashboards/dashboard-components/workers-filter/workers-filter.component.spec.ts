import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersFilterComponent } from './workers-filter.component';

describe('WorkersFilterComponent', () => {
  let component: WorkersFilterComponent;
  let fixture: ComponentFixture<WorkersFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
