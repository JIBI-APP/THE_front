import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole: string | null = null;

  constructor() { }

  login(role: string) {
    this.userRole = role;
    localStorage.setItem('userRole', role);
  }

  logout() {
    this.userRole = null;
    localStorage.removeItem('userRole');
  }

  getRole(): string | null {
    return localStorage.getItem('userRole');
  }

  isLoggedIn(): boolean {
    return this.userRole !== null;
  }

  isLoggedOut(): boolean {
    return this.userRole === null;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }

  isAgent(): boolean {
    return this.userRole === 'agent';
  }

  isClient(): boolean {
    return this.userRole === 'client';
  }
}
