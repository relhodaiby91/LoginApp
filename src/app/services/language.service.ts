import { DatePipe } from '@angular/common';
import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  languageChange = new EventEmitter<string>();
  datePipe: DatePipe = new DatePipe('en-US');
  private dateFormat = environment.dateFormat;
  selectedLanguage: any =  localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
  constructor(private translate: TranslateService) { }

  public translateDate(date: Date): string {
    return this.translate.instant('date', { date: date });
  }

  public convertDates(date: Date, language: string): any {
    if (language == 'ar')
      return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    else {
      return this.datePipe.transform(date.toString(), 'dd MMM yyyy');
    }
  }

  public convertDatesLong(date: Date, language: string): any {
    if (language == 'ar')
      return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        hour12: true,
        minute: 'numeric'
      });
    else {
      return this.datePipe.transform(date.toString(), this.dateFormat)
    }
  }

  public convertDatesLongTimeZone(date: Date, language: string,timezone:string): any {
    if (language == 'ar')
      return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        hour12: true,
        minute: 'numeric',
        timeZone:timezone
      });
    else {
      return this.datePipe.transform(date.toString(), this.dateFormat)
    }
  }
  setSelectedLanguage(language: string) {
    this.selectedLanguage = language;
  }

  getSelectedLanguage() {
    return this.selectedLanguage;
  }
  public convertNumbers(number: Number, language: string): any {
    if (language == 'ar')
      return number.toLocaleString('ar-EG');
    else {
      return number;
    }
  }
}
