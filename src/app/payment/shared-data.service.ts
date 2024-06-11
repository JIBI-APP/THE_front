import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Creditor } from './bill-selection/bill-selection.component';


@Injectable({
  providedIn: 'root'
})

export class SharedDataService {
  private rechargeDataSubject = new BehaviorSubject<any>(null);
  public rechargeData$ = this.rechargeDataSubject.asObservable();

  constructor() {}

  // example data = {phoneNumber: '0624425227', creancierCode: '2', amount: '20'}
  setRechargeData(data: any): void {
    this.rechargeDataSubject.next(data);
  }

  // CRIDETOR SECTION : bind the data (logo and name of provider) from cridetor section to recharge component

  private selectedCreditorData = new BehaviorSubject<Creditor | null>(null);
  selectedCreditorData$ = this.selectedCreditorData.asObservable();

  setSelectedCreditorData(creditor: Creditor): void {
    this.selectedCreditorData.next(creditor);
  }
}