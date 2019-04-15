import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopEditComponent } from './laptop-edit.component';

describe('LaptopEditComponent', () => {
  let component: LaptopEditComponent;
  let fixture: ComponentFixture<LaptopEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
