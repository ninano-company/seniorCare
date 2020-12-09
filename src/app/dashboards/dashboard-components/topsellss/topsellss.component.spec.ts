import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopsellssComponent } from './topsellss.component';

describe('TopsellssComponent', () => {
  let component: TopsellssComponent;
  let fixture: ComponentFixture<TopsellssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopsellssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopsellssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
