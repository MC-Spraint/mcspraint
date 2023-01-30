import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherStarterComponent } from './other-starter.component';

describe('TestComponent', () => {
  let component: OtherStarterComponent;
  let fixture: ComponentFixture<OtherStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherStarterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
