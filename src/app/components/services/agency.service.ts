import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Agence {
  nom: string;
  description: string;
  image: File;
}

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  private baseUrl = 'http://localhost:8089/api/BackOffice';

  constructor(private http: HttpClient) {}

  getAgences(): Observable<Agence[]> {
    return this.http.get<Agence[]>(`${this.baseUrl}/agences`);
  }

  addAgence(agence: Agence): Observable<Agence> {
    const formData = new FormData();
    formData.append('nom', agence.nom);
    formData.append('description', agence.description);
    formData.append('image', agence.image);

    return this.http.post<Agence>(`${this.baseUrl}/createAgence`, formData);
  }
}
