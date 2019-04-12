import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopCreateComponent } from './laptop-create.component';

describe('LaptopCreateComponent', () => {
  let component: LaptopCreateComponent;
  let fixture: ComponentFixture<LaptopCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
