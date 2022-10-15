<p align="center">
  <a> 
    <a href="https://api-projeto-livre.herokuapp.com/"><img src="https://img.shields.io/badge/deploy-heroku.com-red" alt="Deploy on heroku"></a>
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/lealclarissa/api-projeto-livre?color=red">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lealclarissa/api-projeto-livre?color=red">
    <img alt="Github License" src="https://img.shields.io/github/license/lealclarissa/api-projeto-livre?logo=MIT&color=red">
  </a>
</p>

<h1 align="center">
  <img alt="Gif com a logo do projeto" title="API - Fornece Recife" src="./assets/fornece.gif" />
</h1>

<p align="center">Projeto de conclusão do Bootcamp Back-End <a href="https://reprograma.com.br/">{reprograma}</a> em parceria com o <a href="https://www.portodigital.org/capital-humano/iniciativas-para-a-diversidade/mulheres-em-inovacao-negocios-e-artes-minas">MINAs</a> do Porto Digital de Recife</p>

=================

<!--ts-->
- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
  - [Possíveis features](#possíveis-features)
- [Como usar](#como-deseja-usar-este-projeto)
- [Contribuição](#contribuição)
- [Referências](#referências)
- [Agradecimentos](#agradecimentos)
- [Autora](#autora)
- [Licença](#licença)
<!--te-->

=================

## Sobre:

Esta API é um buscador de fornecedores de alimentos e bebidas(A&B) da cidade do Recife-PE. A ideia surgiu a partir de uma notável dificuldade de empreendedores e empresas que estão iniciando no setor em encontrar insumos para ser utilizados em seus empreendimentos.

Inspirei-me em iniciativas como [Menor Preço](https://play.google.com/store/apps/details?id=br.gov.pr.celepar.sefa.mp&hl=pt_BR) (aplicativo que busca o menor preço de acordo com a localização configurada); 

Esta API se destina a facilitar as buscas fazendo uso de outros filtros, tendo em vista que muitas vezes existe um valor mínimo de compra, ou a forma de pagamento pode ser um fator determinante para o fechamento de uma compra.

A princípio fiz um o cadastro de alguns fornecedores e produtos fictícios como exemplo.

Idealmente os fornecedores fariam um *login* e seriam responsáveis por manter o sistema atualizado quanto aos seus dados e os produtos que tiverem cadastrado no sistema. Esses fornecedores podendo ser de microempreendedores a empresas de grande porte.

## Tecnologias:

- Controle de versões: [Git](https://git-scm.com/);
- Editor de código - IDE: [Visual Studio Code](https://code.visualstudio.com/);
- Desenvolver o back-end em Javascript: [Node.js](https://nodejs.org/pt-br/);
- Framework JavaScript: [Express](https://expressjs.com/pt-br/);
- Gerenciador de pacotes: [Npm](https://www.npmjs.com/);
- Testar requisições: [Postman](https://www.postman.com/);
- Visualizar banco de dados: [Robo 3T](https://robomongo.org/);
- Hospedagem do banco de dados na nuvem: [Mongo Atlas](https://www.mongodb.com/cloud/atlas);
- Deploy: [Heroku](https://www.heroku.com/)

## Funcionalidades:

- [x] Cadastrar novos produtos
- [x] Listar todos os produtos
- [x] Atualizar um produto específico
- [x] Remover um produto específico do banco de dados
- [x] Cadastrar novos fornecedores
- [x] Listar todos os fornecedores
- [x] Atualizar dados de um fornecedor específico
- [x] Remover cadastro de um fornecedor específico

### Possíveis features:

- Para os fornecedores:  
  - Visualizar fornecedores por bairro
  - Visualizar fornecedores por especialidade(categoria)
  - Visualizar fornecedores por tipo de entrega;
  - Visualizar fornecedores por forma de pagamento
  - Visualizar fornecedores pela existência ou não de valor mínimo de compra
  - Visualizar produtos por fornecedor
- Para os produtos:  
  - Filtrar produtos por nome
  - Filtrar produtos por especialidade(categoria)
  - Filtrar produtos por forma de pagamento
  - Filtrar produtos por disponibilidade
  - Visualizar fornecedores que vendem determinado produto
- Autorização e autenticação:  
  - Criação de *login*
  - Gerar *token* de autenticação
  - Autenticar todas as rotas

## Como deseja usar este projeto

:eyes: Para visualizar o funcionamento acesse: [docs>Guide_see_it_working.md](https://github.com/lealclarissa/api-projeto-livre/blob/main/docs/Guide_see_it_working.md) 

:mag: Para baixar o projeto para estudar, modificar, testar todas as requisições localmente, acesse: [docs>Guide_run_it_localy.md](https://github.com/lealclarissa/api-projeto-livre/blob/main/docs/Guide_run_it_localy.md)

## Contribuição

Gostou da proposta do projeto e tem interesse em contribuir? Acesse: [docs>CONTRIBUTING.md](https://github.com/lealclarissa/api-projeto-livre/blob/main/docs/CONTRIBUTING.md) para ver como.

## Referências:

- [Matéria sobre o aplicativo Menor Preço](https://www.folhape.com.br/economia/aplicativo-mostra-onde-achar-produto-com-o-menor-preco-em-pernambuco/82021/); 
- [Informações para licenças](http://escolhaumalicenca.com.br/licencas/);
- [Lista com emojis:](https://gist.github.com/rxaviers/7360908);
- [Conversor Markdown para HTML](https://markdowntohtml.com/);
- [Icone lupa](https://www.flaticon.com/svg/static/icons/svg/482/482631.svg);
- [Imagem fornecedores](https://storyset.com/illustration/supermarket-workers/amico);
- [Site para edição de imagem](https://www.canva.com/);

## Agradecimentos:  

Dedico este projeto a todas as mulheres inspiradoras que caminharam comigo ao longo dessa jornada: das professoras incríveis às companheiras de turma que me apoiaram a seguir adiante. Juntes somos mais fortes!
:two_women_holding_hands:

## Autora

<p align="left">
<a>
 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/69424163?s=400&u=6c4ceb2494ca08ef4a05454277aee432c6b5644f&v=4" width="100px;" alt="Foto de Perfil de Clarissa"/>
 <br />
</a>  
	
[![Linkedin Badge](https://img.shields.io/badge/-Clarissa_Leal-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/clarissa-leal/)](https://www.linkedin.com/in/clarissa-leal/)  

---

## Licença

Este projeto está sob a licença [MIT](./LICENSE.md).

Feito com :purple_heart:
