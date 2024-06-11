import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';



export interface Creditor {
  id: number;
  image: string;
  title: string;
  billTypes: string[];
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

  ngOnInit(): void {
    this.getCreditors();
  }

  getCreditors(): void {
    // data for demonstration purposes
    // put them in a json file
    this.creditors = [
      {
        id: 1,
        image: '../../assets/images/IAM-image.jpg',
        title: 'IAM',
        billTypes: ['Recharge']
      },
      {
        id: 2,
        image: '../../assets/images/inwi.webp',
        title: 'Inwi',
        billTypes: ['Recharge']
      },
      {
        id: 3,
        image: '../../assets/images/Orangesvg.png',
        title: 'Orange',
        billTypes: ['Recharge']
      },
      {
        id: 4,
        image: '../../assets/images/IAM-image.jpg',
        title: 'IAM',
        billTypes: ['Bill']
      },
      {
        id: 5,
        image: '../../assets/images/inwi.webp',
        title: 'Inwi',
        billTypes: ['Bill']
      },
      {
        id: 6,
        image: '../../assets/images/Orangesvg.png',
        title: 'Orange',
        billTypes: ['Bill']
      },
      {
        id: 7,
        image: '../../assets/images/REDAL.jpeg',
        title: 'Redal',
        billTypes: ['Bill']
      },
      {
        id: 8,
        image: '../../assets/images/AMANDIS.png',
        title: 'Amandis',
        billTypes: ['Bill']
      },
      {
        id: 9,
        image: '/../../assets/images/Radeema.png',
        title: 'RADEEMA',
        billTypes: ['Bill']
      }
    ];

    this.filteredCreditors = this.creditors;
  }

  onCategoryFilter(event: any): void {
    this.category = event.target.value; // Extract the selected value
    if (this.category) {
      // Filter the creditors based on the selected category

      this.filteredCreditors = this.creditors.filter((creditor) =>
        creditor.billTypes.includes(this.category)
      );
    } else {
      // If no category selected, show all creditors
      console.log('i am in else');
      this.filteredCreditors = this.creditors;
    }
  }

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  onSelectCreditor(creditor: Creditor): void {
    this.selectedCreditor = creditor;
    this.sharedDataService.setSelectedCreditorData(creditor);

    console.log("creditor : ", creditor)
    this.router.navigate([`/recharge/${creditor.id}`])
    // this.route.navigate([`liste-creance/${title}`])
  }



}
