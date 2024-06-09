import { Injectable } from '@angular/core';
import * as Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root'
})
export class OcrService {
  recognizeText(imagePath: string, languages:string): Promise<{ firstName: string, lastName: string, dob: string, placeOfBirth: string, idNumber: string, expirationDate: string }> {
    return Tesseract.recognize(imagePath, 'fra', {
      logger: m => console.log(m)
    }).then(({ data: { text } }) => {
      return this.parseText(text);
    }).catch(error => {
      console.error('Tesseract Error:', error);
      throw error;
    });
  }

  private parseText(text: string): { firstName: string, lastName: string, dob: string, placeOfBirth: string, idNumber: string, expirationDate: string } {
    let firstName = '';
    let lastName = '';
    let dob = '';
    let placeOfBirth = '';
    let idNumber = '';
    let expirationDate = '';

    // Extract first name
    const firstNameMatch = text.match(/(?:\n|^)([A-Z]+)(?=\n)/);
    if (firstNameMatch) {
      firstName = firstNameMatch[1].trim();
    }

    // Extract last name
    const lastNameMatch = text.match(/(?:\n|^)([A-Z]+)(?=\n)/g);
    if (lastNameMatch && lastNameMatch.length > 1) {
      lastName = lastNameMatch[1].trim();
    }

    // Extract date of birth (DOB)
    const dobMatch = text.match(/\b(\d{2}\/\d{2}\/\d{4})\b/);
    if (dobMatch) {
      dob = dobMatch[1].trim();
    }

    // Extract place of birth
    const placeOfBirthMatch = text.match(/(?:à:\s*)([^]+?)(?=\n)/);
    if (placeOfBirthMatch) {
      placeOfBirth = placeOfBirthMatch[1].trim();
    }

    // Extract ID number
    const idNumberMatch = text.match(/\b[A-Z\d]+\b/);
    if (idNumberMatch) {
      idNumber = idNumberMatch[0].trim();
    }

    // Extract expiration date
    const expirationDateMatch = text.match(/(\d{2}-\d{2}-\d{4})/);
    if (expirationDateMatch) {
      expirationDate = expirationDateMatch[1].trim();
    }

    return { firstName, lastName, dob, placeOfBirth, idNumber, expirationDate };
  }
}
