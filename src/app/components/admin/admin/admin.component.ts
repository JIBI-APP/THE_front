import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.login('admin');
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }
}
