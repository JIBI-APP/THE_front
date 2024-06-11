import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor() { }

  onSubmit(form: NgForm) {
    const phoneNumber = form.value.phoneNumber;
    const newPassword = form.value.newPassword;
    // Here you can call a service to change the password
    console.log(phoneNumber, newPassword);
  }

}