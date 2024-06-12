
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedData: { creditor: any, service: any } | null = null;

  setSelectedData(creditor: any, service: any): void {
    this.selectedData = { creditor, service };
  }

  getSelectedData(): { creditor: any, service: any } | null {
    return this.selectedData;
  }
}