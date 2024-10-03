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
- Node.js
- NPM (Node Package Manager) 
- Ionic Cli

## Criação do projeto

```bash
ionic start country-explorer-api blank
```

## Criando a página de países
```bash
ionic generate page countries
```

## Criando a página de detalhes
```bash
ionic generate page details
```

## Criando a página de serviço
```bash
ionic generate service services/country
```

## Consumindo API

## Country.service.ts
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
## Country.service.spec.ts

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
})

```

## Instalação 🛠

```bash
1. Clone o repositório:
   git clone https://github.com/matheusbourguignon/invite-me-api
```

```bash
2. Navegue até o diretório do projeto:
   cd invite-me-api
```

```bash
3. Instale as dependências necessárias:
   npm install
```

## Uso 🚀

Para iniciar o servidor da API, execute o seguinte comando:
npm start

A API estará disponível em http://localhost:3000.

## Funcionalidades 🌟

- Inserção de Dados: Adicione novas estatísticas de países com facilidade.
- Consulta de Dados: Busque estatísticas específicas por critérios definidos.
- Exclusão de Dados: Remova estatísticas que não são mais necessárias.
- Listagem de Dados: Exiba todas as estatísticas disponíveis em um formato organizado.

## Print das telas do projeto
![Tela de apresentação](<tela de apresentação.jpg>)
![tela dos países](<tela dos países.jpg>)
![tela da descrição do país](<tela da descrição do país.jpg>)
-home 
