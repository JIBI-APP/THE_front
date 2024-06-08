import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Vérifier le nom d'utilisateur et le mot de passe
    if (this.username === 'admin' && this.password === 'admin123') {
      this.authService.login('admin');
      this.router.navigate(['/admin']);
    } else if (this.username === 'agent' && this.password === 'agent123') {
      this.authService.login('agent');
      this.router.navigate(['/agent']);
    } else if (this.username === 'client' && this.password === 'client123') {
      this.authService.login('client');
      this.router.navigate(['/client']);
    } else {
      // Afficher un message d'erreur si les informations de connexion sont incorrectes
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  }
}
