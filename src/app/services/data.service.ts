import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClinicOutcomesResponse } from '../models/clinic-outcomes.model';
import { GmiDataItem, TimeInRangeDataItem } from '../models/clinic-outcomes.model';



@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }


  getClinicOutcomesData(days: number): Observable<ClinicOutcomesResponse> {
    // In a real app, you would make an HTTP request here.
    // return this.http.get<ClinicOutcomesResponse>(`/api/clinic-outcomes?days=${days}`);


    // Mock data for demonstration:
    return of(this.generateMockData(days));
  }


  private generateMockData(days: number): ClinicOutcomesResponse {
    const today = new Date();
    let startDate = new Date(today);
    startDate.setDate(today.getDate() - days);


    let endDate = new Date(today);
    endDate = new Date(today.getFullYear(), today.getMonth(), 0);


    let timeInRangeData: TimeInRangeDataItem[] = [
      { "range": "Below 40", "percentage": 1 },
      { "range": "40-54", "percentage": 2 },
      { "range": "54-70", "percentage": 15 },
      { "range": "70-180", "percentage": 82 },
      { "range": "180-240", "percentage": 1 },
      { "range": "Above 240", "percentage": 1 }
    ];


    let gmiData: GmiDataItem[] = [
      { "gmiRange": "<5.7", "percentage": 72 },
      { "gmiRange": "5.7-8", "percentage": 23 },
      { "gmiRange": ">8", "percentage": 5 }
    ];


    let averageGmi = 6.7;
    let patientCount = 120;


    // Simulate "real-time" variation
    timeInRangeData = timeInRangeData.map(item => ({
      ...item,
      "percentage": Math.max(0, Math.min(100, item.percentage + (Math.random() * 4 - 2)))
    }));
    this.normalizePercentages(timeInRangeData);


    gmiData = gmiData.map(item => ({
      ...item,
      "percentage": Math.max(0, Math.min(100, item.percentage + (Math.random() * 4 - 2)))
    }));
    this.normalizePercentages(gmiData);


    averageGmi = Math.max(5.0, Math.min(9.0, averageGmi + (Math.random() * 0.2 - 0.1)));


    const lastUpdated = new Date().toLocaleString();


    return {
      timeInRangeData: timeInRangeData,
      gmiData: gmiData,
      averageGmi: parseFloat(averageGmi.toFixed(1)),
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      lastUpdated: lastUpdated,
      patientCount: patientCount
    };
  }


  private normalizePercentages(dataArray: any[]) {
    let total = dataArray.reduce((sum, item) => sum + item.percentage, 0);
    dataArray.forEach(item => {
      item.percentage = parseFloat(((item.percentage / total) * 100).toFixed(1));
    });
  }
}