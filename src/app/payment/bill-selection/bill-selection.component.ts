
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';
import { AgencyService, Agence } from '../../components/services/agency.service';

export interface Creditor {
  id: number;
  image: string;
  title: string;
  services: any[];
}

@Component({
  selector: 'app-bill-selection',
  templateUrl: './bill-selection.component.html',
  styleUrls: ['./bill-selection.component.css']
})
export class BillSelectionComponent implements OnInit {
  creditors: Creditor[] = [];
  filteredCreditors: Creditor[] = []; 
  selectedCreditor: Creditor | null = null;
  category: string = '';

  constructor(
    private router: Router, 
    private sharedDataService: SharedDataService, 
    private agencyService: AgencyService
  ) {}

  ngOnInit(): void {
    this.getCreditors();
  }

  getCreditors(): void {
    this.agencyService.getAgences().subscribe((agencies: Agence[]) => {
      this.creditors = agencies.map((agency, index) => ({
        id: index + 1,
        image: agency.image.imageUrl,  
        title: agency.nom,
        services: agency.services,
      }));
      this.filteredCreditors = this.creditors;
    }, error => {
      console.error('Failed to fetch creditors', error);
    });
  }

  onSelectCreditor(creditor: Creditor, service: any): void {
    this.selectedCreditor = creditor;
    this.sharedDataService.setSelectedData(creditor, service); // Update to pass both creditor and service data
    this.router.navigate([`/payment-form`, creditor.id, service.id]);
  }
}