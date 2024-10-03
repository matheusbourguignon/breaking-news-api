## Estatísticas de Países 🌍

Este projeto foi desenvolvido com Ionic e tem como objetivo criar uma API para gerenciar e visualizar dados estatísticos de países.

## Estrutura de Arquivos 📄

A organização do projeto está estruturada da seguinte forma:

```bash
src/
└── app/
    ├── home/
    │   ├── home-routing.module.ts
    │   ├── home.module.ts
    │   ├── home.page.html
    │   ├── home.page.scss
    │   ├── home.page.spec.ts
    │   └── home.page.ts
    ├── countries/
    │   ├── countries-routing.module.ts
    │   ├── countries.module.ts
    │   ├── countries.page.html
    │   ├── countries.page.scss
    │   ├── countries.page.spec.ts
    │   ├── countries.page.ts
    │   └── details/
    │       ├── details-routing.module.ts
    │       ├── details.module.ts
    │       ├── details.page.html
    │       ├── details.page.scss
    │       ├── details.page.spec.ts
    │       └── details.page.ts
    └── services/
        ├── country.service.spec.ts
        └── country.service.ts
```
## Pré-requisitos 🔧
Certifique-se de que os seguintes itens estão instalados em seu sistema:
-Node.js
-Ionic/cli

## 1. Baixe as Dependências

## Download e Instalação:
Acesse o site oficial do Node.js https://nodejs.org/ e faça o download da versão recomendada para o seu sistema operacional.

Siga as instruções de instalação.

Verificação da Instalação: Após a instalação, você pode verificar se o Node.js e o npm (gerenciador de pacotes do Node.js) foram instalados corretamente executando os seguintes comandos no terminal:

```bash
node -v
```

versão mais atual:

```bash
npm install node 22.9.0
```

Ionic CLI instalável via npm com o comando:

```bash
 npm install -g @ionic/cli
```

## 2. Criação das Páginas de Navegação
Páginas: home, countries e details.
Comandos utilizados:
Para criar cada uma das páginas de navegação, executei os seguintes comandos:

```bash
ionic generate page countries
```
```bash
ionic generate page details
```

Esses comandos criaram três diretórios diferentes com arquivos padrões para cada página.

## 3. Navegação entre Páginas
Modificação:
No arquivo home.page.html, adicionei os links de navegação para as páginas countries e details usando o seguinte código:
<ion-content>
  <ion-button expand="full" routerLink="/countries">Explorar Países</ion-button>
  <ion-button expand="full" routerLink="/details">Detalhes</ion-button>
</ion-content>

Aqui, foram adicionados botões que utilizam o recurso routerLink para navegar entre as páginas.

## 4. Configuração de Rotas
Modificação:
As rotas foram configuradas no arquivo app-routing.module.ts, onde adicionei as novas rotas para countries e details.

```bash
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule)
  }
];
```
## 5. Consumo de API na Página de Countries
Criação do Serviço:
Para consumir a API de países, criei um serviço em services/country.service.ts usando o comando:

```bash
ionic generate service services/country
```

No arquivo country.service.ts, adicionei o seguinte código para realizar as chamadas à API:

## Código Adicionado (country.service.ts):

```bash
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
```
Este código realiza a requisição para a API pública restcountries.com e 
permite obter dados de todos os países ou de um país específico por nome.

## 6. Exibição dos Dados da API
Modificação:
Na página countries.page.ts, adicionei o seguinte código para consumir e exibir os dados da API:

```bash
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {
  countries: any[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }
}
```
## Modificação:
No arquivo countries.page.html, adicionei o seguinte código para exibir a lista de países:

```bash
<ion-header>
  <ion-toolbar>
    <ion-title>Países</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item *ngFor="let country of countries">
      <ion-label>{{ country.name.common }}</ion-label>
    </ion-item>
  </ion-list>
</ion-content>
```

Este código exibe a lista de países utilizando a diretiva *ngFor para iterar sobre os dados retornados pela API.

## 7. Testes Unitários do Serviço
Modificação:
No arquivo de teste country.service.spec.ts, adicionei o seguinte código para garantir que o serviço foi criado corretamente:

```bash
import { TestBed } from '@angular/core/testing';
import { CountryService } from './country.service';

describe('CountryService', () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
```
## Conclusão
Este projeto foi desenvolvido em Ionic e implementa navegação entre páginas, consumo de API e exibição de dados de países.

## Telas do projeto
![Tela de apresentação](<tela de apresentação.jpg>)
![tela da descrição do país](<tela da descrição do país.jpg>)
![Tela de todos os países](<tela dos países.jpg>)
