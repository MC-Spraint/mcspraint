import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStarterComponent } from './home-starter.component';

describe('TestComponent', () => {
  let component: HomeStarterComponent;
  let fixture: ComponentFixture<HomeStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStarterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
