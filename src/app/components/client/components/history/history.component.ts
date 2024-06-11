import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  transactions?: any[]; // Array to hold the transaction history

  constructor() { }

  ngOnInit(): void {
    // Simulate fetching transaction history from an API or service
    this.fetchTransactionHistory();
  }

  fetchTransactionHistory(): void {
    // Simulate fetching transaction history from an API or service
    setTimeout(() => {
      this.transactions = [
        { id: 1, creditor: "IAM", amount: 100, date: '2022-01-01' },
        { id: 2, creditor: "IAM", amount: 200, date: '2022-01-02' },
        { id: 3, creditor: "IAM", amount: 300, date: '2022-01-03' }
      ]; 
    }, 2000); 
  }
}