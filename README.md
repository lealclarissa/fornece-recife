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
   * [Sobre](##Sobre)
   * [Objetivo](##Objetivo)
   * [Funcionalidades](##Funcionalidades)
   * [Pré Requisitos](##pre-requisitos)
      * [Instruções](###instruções)
   * [Detalhes](##Detalhes)
      * [Tecnologias](###Tecnologias)
      * [Contratos](###Contratos)
      * [Dependências](###Dependências)
   * [Referências](##referências)
   * [Autora](#Autora)
   * [Licença](#Licença)
<!--te-->

## Sobre:

Projeto final do bootcamp {reprograma} em parceria com o MINAs do Porto Digital do Recife.

Trata-se de uma API de Fornecedores de Alimentos e Bebidas(A&B) da cidade do Recife. A ideia surgiu a partir de uma notável dificuldade de empreendedores e empresas que estão iniciando no setor de A&B da cidade em questão de encontrar insumos para ser utilizados em seus empreendimentos.

Inspirei-me em iniciativas como "[Menor Preço](https://play.google.com/store/apps/details?id=br.gov.pr.celepar.sefa.mp&hl=pt_BR)" (aplicativo que busca o menor preço de acordo com a localização configurada); porém, diferente deste aplicativo, esta API se destina a facilitar as buscas por fornecedores usando outros filtros além do preço. Tendo em vista que muitas vezes existe um valor mínimo de compra, ou a distância e/ou tempo de entrega podem ser fatores determinantes para o fechamento de uma compra.

## Objetivo:

Este projeto visa criar uma forma de facilitar esta procura por fornecedores. Estes devem cadastrar seus dados e manter o sistema atualizado, de forma que seus possíveis clientes encontrem as informações esperadas. Os fornecedores podem ser de microempreendedores a grandes empresas, que fornecem A&B para a cidade do Recife - CNPJ.

A princípio farei o cadastro de alguns fornecedores e produtos como exemplo. Com o tempo irei alimentando o banco de dados e também aceitarei contribuições.

## Funcionalidades:

- [ ] Cadastrar novos produtos
- [ ] Listar todos os produtos
- [ ] Atualizar um produto específico
- [ ] Remover um produto específico do banco de dados
- [ ] Cadastrar novos fornecedores
- [ ] Listar todos os fornecedores
- [ ] Atualizar dados de um fornecedor específico
- [ ] Remover cadastro de um fornecedor específico
  
## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com/), [Node.js](https://nodejs.org/pt-br/). 

### Instruções para utilização da API:

```bash
# Clone este repositório
$ git clone <https://github.com/lealclarissa/projeto-livre>

# Acesse a pasta do projeto no terminal/cmd
$ cd projeto-livre

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# O servidor inciará na porta:8083 - acesse <http://localhost:8083>
```

## Detalhes:

### Tecnologias: 

* [Node.js](https://nodejs.org/en/)  
* [Git](https://git-scm.com/) 
* [MongoDB](https://www.mongodb.com/)  
* [Postman](https://www.postman.com/)
* [Heroku](https://www.heroku.com/)

### Contratos principais:

| Verbo | Endpoint | Descrição |
| ----- | -------- | --------- |
| POST | `/fornecedores` | Cadastra um novo fornecedor
| POST | `/produtos` | Cadastra um novo produto
| GET | `/fornecedores` | Retorna todos os fornecedores
| GET | `/produtos` | Retorna todos os produtos
| PUT | `/fornecedores/:id` | Atualiza um fornecedor específico
| PUT | `/produtos/:id` | Atualiza um produto específico
| DELETE | `/fornecedores/:id` | Deleta um fornecedor específico
| DELETE | `produtos/:id` | Deleta um produto específico

### Contratos extras:

### Dependências utilizadas:

Express: ```npm install --save express```    
Nodemon: ```npm install --save-dev nodemon```  
Dotenv-safe: ```npm install --save dotenv-safe```  
Mongoose: ```npm install --save mongoose``` 

---

## Referências:

* Matéria sobre o aplicativo Menor Preço: https://www.folhape.com.br/economia/aplicativo-mostra-onde-achar-produto-com-o-menor-preco-em-pernambuco/82021/ ;  

---

## Autora

<a>
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/69424163?s=400&u=6c4ceb2494ca08ef4a05454277aee432c6b5644f&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Clarissa Leal</b></sub></a>

[![Linkedin Badge](https://img.shields.io/badge/-Clarissa-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/clarissa-leal/)](https://www.linkedin.com/in/clarissa-leal/) 

---

## Licença

Este projeto está sob a licença [MIT](./LICENSE.md).

Feito com :purple_heart: por Clarissa Leal 👋🏽 [Entre em contato!](https://www.linkedin.com/in/clarissa-leal/)