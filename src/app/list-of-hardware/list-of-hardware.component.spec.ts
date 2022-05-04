import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfHardwareComponent } from './list-of-hardware.component';

describe('ListOfHardwareComponent', () => {
  let component: ListOfHardwareComponent;
  let fixture: ComponentFixture<ListOfHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfHardwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
