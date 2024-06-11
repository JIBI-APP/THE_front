

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://jibi-api.onrender.com/api/auth/login'; // Update this URL to match your backend endpoint

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap(response => {
        this.setToken(response.token);
        this.setRole(response.role);
      })
    );
  }

  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  setRole(role: string) {
    localStorage.setItem('userRole', role);
  }

  getRole(): string | null {
    return localStorage.getItem('userRole');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  isAgent(): boolean {
    return this.getRole() === 'AGENT';
  }

  isClient(): boolean {
    return this.getRole() === 'CLIENT';
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
  }

  // You can add more methods for logout, token validation, etc.
}



// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private userRole: string | null = null;

//   constructor() { }

//   login(role: string) {
//     this.userRole = role;
//     localStorage.setItem('userRole', role);
//   }

//   logout() {
//     this.userRole = null;
//     localStorage.removeItem('userRole');
//   }

//   getRole(): string | null {
//     return localStorage.getItem('userRole');
//   }

//   isLoggedIn(): boolean {
//     return this.userRole !== null;
//   }

//   isLoggedOut(): boolean {
//     return this.userRole === null;
//   }

//   isAdmin(): boolean {
//     return this.userRole === 'admin';
//   }

//   isAgent(): boolean {
//     return this.userRole === 'agent';
//   }

//   isClient(): boolean {
//     return this.userRole === 'client';
//   }
// }
