import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '658571931bd24bb9ac16af4024a6f7ae';  // Substitua com sua API Key
  private apiUrl = 'https://newsapi.org/v2/top-headlines?sources=google-news-br';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    const url = `${this.apiUrl}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
