import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Store } from '@ngrx/store';
import { selectTimeInRangeData } from '../../store/selectors/clinic-outcomes.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-time-in-range-chart',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './time-in-range-chart.component.html',
  styleUrl: './time-in-range-chart.component.scss',
})
export class TimeInRangeChartComponent implements OnInit {
  protected readonly store = inject(Store);
  protected readonly destroyRef = inject(DestroyRef);

  timeInRangeData$ = this.store.select(selectTimeInRangeData);
  chartData: any[] = [];

  showYAxis = true;
  showXAxis = true;
  yAxisLabel = 'Percentage';
  xAxisLabel = 'Range';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  ngOnInit() {
    this.timeInRangeData$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        if (data) {
          this.chartData = data.map((item) => ({
            name: item.range,
            value: item.percentage,
          }));
        }
      });
  }
}
