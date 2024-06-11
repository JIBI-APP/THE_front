import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://jibi-api.onrender.com/api/auth';
  private userRole: string | null = null;
  private firstLogin: boolean = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password }).pipe(
      tap((response: any) => {
        this.setRole(response.role);
        this.setToken(response.token);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.get(`${this.apiUrl}/logout`).pipe(
      tap(() => {
        localStorage.removeItem('userRole');
        this.userRole = null;
      })
    );
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
    return this.userRole === 'ADMIN';
  }

  isAgent(): boolean {
    return this.userRole === 'AGENT';
  }

  isClient(): boolean {
    return this.userRole === 'CLIENT';
  }

  isFirstLogin(): boolean {
    return JSON.parse(localStorage.getItem('firstLogin') || 'false');
  }

  completeFirstLogin() {
    this.firstLogin = false;
    localStorage.setItem('firstLogin', 'false');
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  setRole(role: string): void {
    this.userRole = role;
    localStorage.setItem('userRole', role);
  }
}