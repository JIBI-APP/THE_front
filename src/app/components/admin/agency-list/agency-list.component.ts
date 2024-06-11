import { Component, OnInit } from '@angular/core';
import { Agence, AgencyService } from '../../services/agency.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit{
  agences: Agence[] = [];
  displayedColumns: string[] = ['nom', 'description','Logo','actions'];

  constructor(private agenceService: AgencyService) {}

  ngOnInit(): void {
    this.agenceService.getAgences().subscribe((agences) => {
      this.agences = agences;
      console.log('agenceeeee',this.agences)
    });
  }

  editAgence(agence: Agence) {
    alert('Edit functionality will be implemented here.');
  }

  deleteAgence(agence: Agence) {
    alert('Delete functionality will be implemented here.');
  }

}
