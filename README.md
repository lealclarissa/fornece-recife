<p align="center">
  <a> 
    <img alt="Node version" src="https://img.shields.io/badge/node-%3E%3D%206.0.0-brightgreen">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/lealclarissa/projeto-livre">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lealclarissa/projeto-livre">
    <img alt="Github License" src="https://img.shields.io/github/license/lealclarissa/projeto-livre?logo=MIT">
  </a>
</p>

<!-- <h1 align="center">
  <img alt="FAEB Recife" title="#API - Fornecedores de Alimentos e Bebidas em Recife" src="./assets/banner.png" />
</h1> -->

<h1 align="center">
    <br>
    <p align="center">API - Fornecedores de Alimentos e Bebidas em Recife<p>
</h1>

<h2 align="center">
    <a href="https://nodejs.org/pt-br/">🔗 Node</a>
</h2>
<p align="center"> Projeto backend</p>

<h4 align="center"> 
	🚧  Em construção  🚧
</h4>

=================

<!--ts-->

- [Sobre](#sobre)
- [Objetivo](#objetivo)
- [Funcionalidades](#funcionalidades)
- [Pré Requisitos](#pré-requisitos)
  - [Requisitos Não Funcionais](#requisitos-não-funcionais)
  - [Instruções](#instruções-para-utilização-da-api)
- [Detalhes](#detalhes)
  - [Contratos](#contratos-principais)
- [Referências](#referências)
- [Autora](#autora)
- [Licença](#licença)
<!--te-->

## Sobre:

Projeto final do bootcamp {reprograma} em parceria com o MINAs do Porto Digital do Recife.

Trata-se de uma API de Fornecedores de Alimentos e Bebidas(A&B) da cidade do Recife. A ideia surgiu a partir de uma notável dificuldade de empreendedores e empresas que estão iniciando no setor de A&B da cidade em questão de encontrar insumos para ser utilizados em seus empreendimentos.

Inspirei-me em iniciativas como [Menor Preço](https://play.google.com/store/apps/details?id=br.gov.pr.celepar.sefa.mp&hl=pt_BR) (aplicativo que busca o menor preço de acordo com a localização configurada); porém, diferente deste aplicativo, esta API se destina a facilitar as buscas por fornecedores ou produto usando outros filtros. Tendo em vista que muitas vezes existe um valor mínimo de compra, ou a distância pode ser um fator determinante para o fechamento de uma compra.

## Objetivo:

Este projeto visa criar uma forma de auxiliar nesta procura por fornecedores. Estes devem cadastrar seus dados e manter o sistema atualizado, de forma que seus possíveis clientes encontrem as informações esperadas. Os fornecedores podem ser de microempreendedores a grandes empresas, que fornecem A&B para a cidade do Recife.

A princípio farei o cadastro de alguns fornecedores e produtos fictícios como exemplo. Com o tempo posso alimentar o banco de dados com valores reais e também aceitar contribuições.

## Funcionalidades:

- [x] Cadastrar novos produtos
- [x] Listar todos os produtos
- [ ] Atualizar um produto específico
- [ ] Remover um produto específico do banco de dados
- [x] Cadastrar novos fornecedores
- [x] Listar todos os fornecedores
- [ ] Atualizar dados de um fornecedor específico
- [ ] Remover cadastro de um fornecedor específico

## Pré-requisitos

Antes de começar é necessário/aconselhável possuir:

- [Git](https://git-scm.com/);
- [Node.js](https://nodejs.org/pt-br/);
- Link do projeto no [Heroku](https://www.heroku.com/): https://api-projeto-livre.herokuapp.com/ ;
- [Postman](https://www.postman.com/) (Criarei uma collection com todas as requests feitas no postman para auxiliar nos testes)

### Requisitos Não Funcionais

- Aplicação em Node/Express com requisições REST
- IDE Visual Studio Code

### Instruções para utilização da API:

```bash
# Acesse o deploy da aplicação pelo Heroku:
https://api-projeto-livre.herokuapp.com/

# Após acessar o link escolha um GET da lista abaixo (contratos principais)  para testar. Vá até a barra de endereço e acrescente o endponint no final. Ex:
https://api-projeto-livre.herokuapp.com/suppliers

# O exemplo acima deve retornar todos os fornecedores cadastrados na API

# Proceda da mesma maneira com todos os GET. Para testar as outras requisições (POST, PUT, DELETE) eu utilizei o Postman
```

## Detalhes:

### Contratos principais:

| Verbo  | Endpoint         | Descrição                         |
| ------ | ---------------- | --------------------------------- |
| POST   | `/suppliers`     | Cadastra um novo fornecedor       |
| POST   | `/products`      | Cadastra um novo produto          |
| GET    | `/suppliers`     | Retorna todos os fornecedores     |
| GET    | `/products`      | Retorna todos os produtos         |
| PUT    | `/suppliers/:id` | Atualiza um fornecedor específico |
| PUT    | `/products/:id`  | Atualiza um produto específico    |
| DELETE | `/suppliers/:id` | Deleta um fornecedor específico   |
| DELETE | `/products/:id`  | Deleta um produto específico      |

### Contratos extras:

---

## Referências:

- Matéria sobre o aplicativo Menor Preço: https://www.folhape.com.br/economia/aplicativo-mostra-onde-achar-produto-com-o-menor-preco-em-pernambuco/82021/ ;

---

## Autora

<a>
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/69424163?s=400&u=6c4ceb2494ca08ef4a05454277aee432c6b5644f&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Clarissa Leal</b></sub>
</a>

[![Linkedin Badge](https://img.shields.io/badge/-Clarissa-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/clarissa-leal/)](https://www.linkedin.com/in/clarissa-leal/)

---

## Licença

Este projeto está sob a licença [MIT](./LICENSE.md).

Feito com :purple_heart: por Clarissa Leal 👋🏽 [Entre em contato!](https://www.linkedin.com/in/clarissa-leal/)
