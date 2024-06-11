import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css']
})
export class SoldeComponent {
  solde?: number;

  ngOnInit(): void {
    this.fetchAmount();
  }

  fetchAmount(): void {
    // Simulate the API call
    of(100).subscribe(
      response => {
        this.solde = response;
        console.log(response);
        console.log(this.solde);
      },
      error => {
        console.error('Error occurred while fetching the solde:', error);
      }
    );
  }
}