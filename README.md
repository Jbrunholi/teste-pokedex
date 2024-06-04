# Pokédex App

Este projeto é uma Pokédex, uma aplicação web para explorar e visualizar detalhes sobre diferentes Pokémons. Ele foi construído usando Angular e Ionic Framework, e faz uso da PokeAPI para obter dados sobre os Pokémons.

## Conteúdo

1. [Visão Geral](#visão-geral)
2. [Funcionalidades](#funcionalidades)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Como Executar](#como-executar)
5. [Dependências](#dependências)
6. [Como Contribuir](#como-contribuir)
7. [Licença](#licença)

## Visão Geral

A Pokédex App permite aos usuários visualizar uma lista de Pokémons, pesquisar por um Pokémon específico, e visualizar detalhes sobre cada Pokémon, incluindo tipo, peso, altura, experiência base, e evolução. Também é possível marcar Pokémons como favoritos.

## Funcionalidades

- **Visualização da Lista de Pokémons**: Carregamento incremental dos Pokémons conforme o usuário rola a página.
- **Pesquisa de Pokémons**: Pesquisa por nome de Pokémon, independentemente de estarem carregados na lista atual.
- **Detalhes do Pokémon**: Visualização de detalhes como tipo, peso, altura, experiência base, e evolução.
- **Favoritar Pokémons**: Marcar e desmarcar Pokémons como favoritos.
- **Design Responsivo**: Interface adaptável para dispositivos móveis e desktop.

## Estrutura do Projeto

```bash
src/
├── app/
│   ├── pages/
│   │   ├── home/
│   │   │   ├── home.page.html
│   │   │   ├── home.page.scss
│   │   │   ├── home.page.ts
│   │   ├── details/
│   │   │   ├── details.page.html
│   │   │   ├── details.page.scss
│   │   │   ├── details.page.ts
│   ├── services/
│   │   ├── pokeapi.service.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── Shared
│   │   ├── pipes
│   │   │   ├── capitalize.pipe.ts
├── assets/
├── theme/
│   ├── variables.scss
├── global.scss
├── index.html
```
## Como Executar

### Pré-requisitos

- Node.js (versão 12 ou superior)
- Angular CLI (versão 12 ou superior)
- Ionic CLI (versão 6 ou superior)

### Passos para Configuração
- Clone o repositório
```
git clone https://github.com/seu-usuario/pokedex-app.git
cd pokedex-app
```
- Instale as dependências
```
npm install
```
- Execute a aplicação
```
ionic serve
```
Este comando iniciará um servidor de desenvolvimento e abrirá a aplicação no navegador. Qualquer mudança no código resultará em recarregamento automático.

## Dependências
- @angular/core: Estrutura principal para desenvolvimento em Angular.
- @ionic/angular: Integração do Ionic Framework com Angular.
- rxjs: Biblioteca para programação reativa.
- @angular/router: Módulo de roteamento para Angular.

## Como Contribuir
- Faça um fork do projeto.
- Crie uma nova branch (git checkout -b feature/nova-funcionalidade).
- Commit suas mudanças (git commit -am 'Adicionei uma nova funcionalidade').
- Push para a branch (git push origin feature/nova-funcionalidade).
- Abra um Pull Request.

## Licença
Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Este projeto foi desenvolvido com o objetivo de aprender e praticar Angular e Ionic Framework. A PokeAPI foi utilizada como fonte de dados para os Pokémons. Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou contribuir com melhorias.
