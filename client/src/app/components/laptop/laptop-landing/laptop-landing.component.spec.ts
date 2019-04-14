import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopLandingComponent } from './laptop-landing.component';

describe('LaptopLandingComponent', () => {
  let component: LaptopLandingComponent;
  let fixture: ComponentFixture<LaptopLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
