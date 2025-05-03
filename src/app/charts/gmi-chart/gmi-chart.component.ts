import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAverageGmi,
  selectGmiData,
} from '../../store/selectors/clinic-outcomes.selectors';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-gmi-chart',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './gmi-chart.component.html',
  styleUrl: './gmi-chart.component.scss',
})
export class GmiChartComponent implements OnInit {
  protected readonly store = inject(Store);
  protected readonly destroyRef = inject(DestroyRef);

  gmiData$ = this.store.select(selectGmiData);
  averageGmi$ = this.store.select(selectAverageGmi);

  chartData: any[] = [];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB'],
  };

  ngOnInit() {
    this.gmiData$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        if (data) {
          this.chartData = data.map((item) => ({
            name: item.gmiRange,
            value: item.percentage,
          }));
        }
      });
  }
}
