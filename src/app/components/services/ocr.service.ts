import { Injectable } from '@angular/core';
import * as Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root'
})
export class OcrService {
  recognizeText(imagePath: string, languages: string): Promise<string> {
    return Tesseract.recognize(imagePath, languages, {
      logger: m => console.log(m) 
    }).then(({ data: { text } }) => text)
      .catch(error => {
        console.error('Tesseract Error:', error);
        throw error;
      });
  }

  extractDates(ocrResult: string): string[] {
    const dateMatches = ocrResult.match(/(\d{2}:\d{2}-)?\b(\d{2}\/\d{2}\/\d{4,5}|\d{2}\.\d{2}\.\d{4,5}|\d{8,9})\b/g);
    if (dateMatches) {
      const correctedDates = dateMatches.map(date => {
        const digits = date.match(/\d/g) || [];
        if (digits.length > 8) {
          // Remove the extra digit from the year part
          digits.splice(6, 1);
        }
        if (digits.length === 8) {
          return `${digits.slice(0, 2).join('')}/${digits.slice(2, 4).join('')}/${digits.slice(4).join('')}`;
        } else {
          return date;
        }
      });
      console.log('Dates found in the OCR result:', correctedDates);
      return correctedDates;
    }
    return [];
  }

  extractId(ocrResult: string): string  {
    const idMatch = ocrResult.match(/\b\w{5,}\b/g);
    if (idMatch) {
      const filteredIdMatch = idMatch.filter(id => !['ROYAUME', 'MAROC', 'jusqu', 'Valabio', 'CARTE', 'NATIONALE', 'IDENTITE', 'DENTITE'].includes(id));
      const idNumber = filteredIdMatch.find(id => /^[A-Z].*\d$/.test(id)) || 'No ID found';
      console.log('ID number found in the OCR result:', idNumber);
      return idNumber;
    }
    console.log('No ID number found in the OCR result');
    return 'No ID found';
  }

  extractNames(ocrResult: string): string[] {
    const idMatch = ocrResult.match(/\b\w{5,}\b/g);
    if (idMatch) {
      const filteredIdMatch = idMatch.filter(id => !['ROYAUME', 'MAROC', 'jusqu', 'Valabio', 'CARTE', 'NATIONALE', 'IDENTITE', 'DENTITE'].includes(id));
      const nameMatch = filteredIdMatch.filter(id => id === id.toUpperCase());
      console.log('Names found in the OCR result:',filteredIdMatch);
      return nameMatch;
    }
    return [];
  }

  
}