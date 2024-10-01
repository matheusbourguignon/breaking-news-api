import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsData: any;
  loading: boolean = false;

  constructor(private newsService: NewsService) {}

  fetchNews() {
    this.loading = true;
    this.newsService.getNews().subscribe(
      (data) => {
        this.newsData = data;
        this.loading = false;
      },
      (err) => {
        console.error('Erro ao buscar as notícias', err);
        this.loading = false;
      }
    );
  }
}
