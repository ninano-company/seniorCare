import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsellsComponent } from './topsells.component';

describe('TopsellsComponent', () => {
  let component: TopsellsComponent;
  let fixture: ComponentFixture<TopsellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
