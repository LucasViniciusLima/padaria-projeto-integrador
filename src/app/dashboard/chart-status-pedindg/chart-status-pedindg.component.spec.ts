import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStatusPedindgComponent } from './chart-status-pedindg.component';

describe('ChartStatusPedindgComponent', () => {
  let component: ChartStatusPedindgComponent;
  let fixture: ComponentFixture<ChartStatusPedindgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStatusPedindgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStatusPedindgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
