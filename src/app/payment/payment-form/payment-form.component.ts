import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
   
  firstName: string = '';
  lastName: string = '';
  accountNumber: string = '';
  amount: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  
  submitPayment() {
    // Envoyer les détails du paiement au backend pour traitement
    // Une fois le paiement effectué, vous pouvez rediriger l'utilisateur vers une page de confirmation ou de succès.
    // Dans cet exemple, nous redirigeons simplement l'utilisateur vers la page précédente.
    this.router.navigate(['/confirmepaye']);

}
cancelPayment(){

}

}
