import { Component } from '@angular/core';
import { OcrService } from '../services/ocr.service';

@Component({
  selector: 'app-root',
  templateUrl: './ocr-test.component.html',
  styleUrls: ['./ocr-test.component.css']
})
export class OcrTestComponent {
  selectedImage: string | ArrayBuffer | null = null;
  ocrResult: string = '';
  firstName: string = '';
  lastName:string = '';
  dateOfBirth: string = '';
  dateOfExpiration: string = '';
  idNumber: string = '';

  constructor(private ocrService: OcrService) { }

  onFileChange(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
    }
  }

  recognizeText() {
    if (this.selectedImage) {
      this.ocrService.recognizeText(this.selectedImage as string, 'eng+fra')
        .then((result: string) => {
          this.ocrResult = result;
          const dates = this.ocrService.extractDates(result);
          const names = this.ocrService.extractNames(result);
          const id = this.ocrService.extractId(result);
          if (dates.length <= 2) {
            this.dateOfBirth = dates[0]; // older date
            this.dateOfExpiration = dates[0]; // newer date
          }

          if (dates.length >= 2) {
            this.dateOfBirth = dates[0]; // older date
            this.dateOfExpiration = dates[1]; // newer date
          }

          if (names.length >= 2) {
            this.firstName = names[0]; // first name
            this.lastName = names[1]; // last name
            // this.idNumber = names[names.length - 1]; 
          }
          this.idNumber = id;

        });
    }
  }
}