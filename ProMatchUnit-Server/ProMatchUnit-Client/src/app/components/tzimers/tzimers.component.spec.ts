import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TzimersComponent } from './tzimers.component';

describe('TzimersComponent', () => {
  let component: TzimersComponent;
  let fixture: ComponentFixture<TzimersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TzimersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TzimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
