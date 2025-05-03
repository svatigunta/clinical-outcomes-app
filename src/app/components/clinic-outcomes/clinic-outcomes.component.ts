import { Component, inject, OnInit } from '@angular/core';
import { selectClinicOutcomesData, selectEndDate, selectLastUpdated, selectStartDate } from '../../store/selectors/clinic-outcomes.selectors';
import { Store } from '@ngrx/store';
import { DataService } from '../../services/data.service';
import { loadClinicOutcomes } from '../../store/actions/clinic-outcomes.actions';
import { TimeInRangeChartComponent } from '../../charts/time-in-range-chart/time-in-range-chart.component';
import { GmiChartComponent } from '../../charts/gmi-chart/gmi-chart.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-clinic-outcomes',
  imports: [TimeInRangeChartComponent, GmiChartComponent, CommonModule],
  templateUrl: './clinic-outcomes.component.html',
  styleUrl: './clinic-outcomes.component.scss'
})
export class ClinicOutcomesComponent implements OnInit {
  protected readonly store = inject(Store);
  protected readonly dataService = inject(DataService);
  
  clinicOutcomesData$ = this.store.select(selectClinicOutcomesData);
  startDate$ = this.store.select(selectStartDate);
  endDate$ = this.store.select(selectEndDate);
  lastUpdated$ = this.store.select(selectLastUpdated);
 

  selectedDays = 30;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.store.dispatch(loadClinicOutcomes({ days: this.selectedDays }));
  }

  onDaysSelected(days: number) {
    this.selectedDays = days;
    this.loadData();
  }

  printPage() {
    window.print();
  } 

}
