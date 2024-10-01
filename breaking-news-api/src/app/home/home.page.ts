import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { NavController } from '@ionic/angular'; // Importando NavController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsData: any;
  loading: boolean = false;

  constructor(private newsService: NewsService, private navCtrl: NavController) {} // Injeta NavController

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

  // Função para voltar à página de apresentação
  goToPresentation() {
    this.navCtrl.navigateBack('/presentation'); // Navega para a página de apresentação
  }
}
