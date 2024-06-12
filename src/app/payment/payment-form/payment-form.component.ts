import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  accountNumber: string = '';
  amount: number = 0;
  creditorImage: string | null = null;
  selectedCreditor: any = null; 
  selectedService: any = null; 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    // Retrieve data from shared service
    const selectedData = this.sharedDataService.getSelectedData();
    if (selectedData) {
      this.creditorImage = selectedData.creditor.image;
      this.selectedCreditor = selectedData.creditor;
      this.selectedService = selectedData.service;
    }
  }

  submitPayment(): void {
    // Add your payment submission logic here
    // Assuming the payment is successful, navigate to confirmepaye component
    this.router.navigate(['/confirmepaye']);
  }

  cancelPayment(): void {
    // Add your cancel payment logic here
    console.log('Payment canceled');
  }
}