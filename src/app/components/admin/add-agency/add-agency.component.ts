import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgencyService, Agence } from '../../services/agency.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-agency',
  templateUrl: './add-agency.component.html',
  styleUrls: ['./add-agency.component.css']
})
export class AddAgencyComponent {
  backoffice1!: FormGroup;

  constructor(private fb: FormBuilder, private agenceService: AgencyService, private router: Router) {
    this.backoffice1 = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      this.backoffice1.patchValue({ image: file });
    }
  }

  onSubmit() {
    if (this.backoffice1.valid) {
      const newAgence: Agence = this.backoffice1.value;
      this.agenceService.addAgence(newAgence).subscribe(() => {
        alert('Agence ajoutée avec succès');
        this.router.navigate(['/']);
      });
    }
  }

  onCancel() {
    this.backoffice1.reset();
  }

  goBack() {
    this.router.navigate(['/agences']);
  }

}
