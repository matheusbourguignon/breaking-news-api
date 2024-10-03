## Estatísticas de Países 🌍

Projeto com ionic com objetivo desenvolver uma API para gerenciar e visualizar dados estatísticos de países.

## Estrutura de Arquivos 📄

A organização do projeto é apresentada a seguir:

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

```bash
- Node.js
- NPM (Node Package Manager) 
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
