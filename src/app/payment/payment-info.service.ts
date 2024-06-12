import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {
  private firstName: string = '';
  private lastName: string = '';
  private accountNumber: string = '';
  private amount: number = 0;

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getLastName(): string {
    return this.lastName;
  }

  setAccountNumber(accountNumber: string): void {
    this.accountNumber = accountNumber;
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }

  getAmount(): number {
    return this.amount;
  }
}