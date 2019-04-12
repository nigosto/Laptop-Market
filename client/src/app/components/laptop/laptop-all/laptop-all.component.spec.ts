import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopAllComponent } from './laptop-all.component';

describe('LaptopAllComponent', () => {
  let component: LaptopAllComponent;
  let fixture: ComponentFixture<LaptopAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
