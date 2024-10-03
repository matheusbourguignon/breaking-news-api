import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all';  // URL da API

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getCountryByName(name: string): Observable<any> {
    return this.http.get<any>(`https://restcountries.com/v3.1/name/${name}`);
  }
}
