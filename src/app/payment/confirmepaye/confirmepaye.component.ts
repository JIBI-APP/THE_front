
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentInfoService } from '../payment-info.service';
// import { selectedData } from '../shared-data.service';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-confirmepaye',
  templateUrl: './confirmepaye.component.html',
  styleUrls: ['./confirmepaye.component.css']
})
export class ConfirmepayeComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  amount: number = 0;
  creditorImage: string | null = null;
  selectedCreditor: any = null; 
  selectedService: any = null; 

  constructor(private router: Router,private sharedDataService: SharedDataService,
    private paymentInfoService: PaymentInfoService) {}

  ngOnInit(): void {
    // Retrieve payment information from the PaymentInfoService
    this.firstName = this.paymentInfoService.getFirstName();
    this.lastName = this.paymentInfoService.getLastName();
    this.amount = this.paymentInfoService.getAmount();
    const selectedData = this.sharedDataService.getSelectedData();
    if (selectedData) {
      this.creditorImage = selectedData.creditor.image;
      this.selectedCreditor = selectedData.creditor;
      this.selectedService = selectedData.service;
    }
    // You may also retrieve other data such as creditor and service if needed
    // For example:
    // this.creditorImage = this.paymentInfoService.getSelectedCreditor().image;
    // this.selectedCreditor = this.paymentInfoService.getSelectedCreditor();
    // this.selectedService = this.paymentInfoService.getSelectedService();
  }

  confirmPayment(): void {
    // Add your payment confirmation logic here
    console.log('Payment confirmed');
    // After confirming payment, navigate to another page if needed
    // For example, navigate to home page
    this.router.navigate(['/home']);
  }

  goBack(): void {
    // Add logic to navigate back to the previous page
    console.log('Going back');
    this.router.navigate(['/payment-form']);
  }
}