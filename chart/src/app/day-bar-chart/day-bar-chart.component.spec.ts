import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBarChartComponent } from './day-bar-chart.component';

describe('DayBarChartComponent', () => {
  let component: DayBarChartComponent;
  let fixture: ComponentFixture<DayBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
