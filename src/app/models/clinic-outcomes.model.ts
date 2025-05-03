// data.service.ts and other files
 

export interface TimeInRangeDataItem {
    range: string;
    percentage: number;
   }
   
  
   export interface GmiDataItem {
    gmiRange: string;
    percentage: number;
   }
   
  
   export interface ClinicOutcomesResponse {
    timeInRangeData: TimeInRangeDataItem[];
    gmiData: GmiDataItem[];
    averageGmi: number;
    startDate: string;
    endDate: string;
    lastUpdated: string;
    patientCount: number;
   }