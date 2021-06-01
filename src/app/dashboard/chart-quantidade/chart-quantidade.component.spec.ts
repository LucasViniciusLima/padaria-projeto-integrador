import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQuantidadeComponent } from './chart-quantidade.component';

describe('ChartQuantidadeComponent', () => {
  let component: ChartQuantidadeComponent;
  let fixture: ComponentFixture<ChartQuantidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartQuantidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQuantidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
