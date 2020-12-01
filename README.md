# API - Fornecedores de Alimentos e Bebidas em Recife

**IMPORTANTE: projeto ainda em desenvolvimento!**  

## Sobre:

Este é meu projeto final do bootcamp {reprograma} em parceria com o MINAs do Porto Digital do Recife.

Trata-se de uma API de Fornecedores de Alimentos e Bebidas(A&B) da cidade do Recife. A ideia surgiu a partir de uma notável dificuldade de empreendedores e empresas que estão iniciando no setor de A&B da cidade em questão de encontrar insumos para ser utilizados em seus empreendimentos.

Inspirei-me em iniciativas como "[Menor Preço](https://play.google.com/store/apps/details?id=br.gov.pr.celepar.sefa.mp&hl=pt_BR)" (aplicativo que busca o menor preço de acordo com a localização configurada); porém, diferente deste aplicativo, esta API se destina a facilitar as buscas por fornecedores usando outros filtros além do preço. Tendo em vista que muitas vezes existe um valor mínimo de compra, ou a distância e/ou tempo de entrega podem ser fatores determinantes para o fechamento de uma compra.

## Objetivo:

Este projeto visa criar uma forma de facilitar esta procura por fornecedores. Estes devem cadastrar seus dados e manter o sistema atualizado, de forma que seus possíveis clientes encontrem as informações esperadas. Os fornecedores podem ser de microempreendedores a grandes empresas, que fornecem A&B para a cidade do Recife - CNPJ.

A princípio farei o cadastro de alguns fornecedores e produtos como exemplo. Com o tempo irei alimentando o banco de dados e também aceitarei contribuições.

A busca será organizada por fornecedor e por produto. Além disso, inicialmente criarei os seguintes filtros: por nome do produto, por bairro, por preço, por valor mínimo de compra, por tipo de entrega e por categoria do produto.

## Detalhes Técnicos: *(Work In Progress)*

A API terá dois *schemas*:

* Fornecedores;  
* Produtos. 

### Tecnologias utilizadas: 

* [Node.js](https://nodejs.org/en/)  
* [Git](https://git-scm.com/) e [Github](https://github.com/)  
* [Visual Studio Code](https://code.visualstudio.com/)  
* [MongoDB](https://www.mongodb.com/)  
* [Postman](https://www.postman.com/)
* [Heroku](https://www.heroku.com/)

### Dependências utilizadas:

Express: ```npm install --save express```    
Nodemon: ```npm install --save nodemon```  
Dotenv-safe: ```npm install --save dotenv-safe```  
Mongoose: ```npm install --save mongoose``` 

### Aprendizados:

### Instruções para utilização da API:

### Rotas - *Em construção*

**Principais**:

Requisição | Endpoint
--- | ---

Create | /fornecedores
--- | ---

Create | /produtos
----| ----

Read | /fornecedores
---|---

Read | /produtos
--- | ---

Update | /fornecedores
--- | ---

Update | /produtos
--- | ---

Delete | /fornecedores
--- | ---

Delete | produtos
--- | ---  


---  

## Referências:

* Matéria sobre o aplicativo Menor Preço: https://www.folhape.com.br/economia/aplicativo-mostra-onde-achar-produto-com-o-menor-preco-em-pernambuco/82021/ ;  

* Express: https://expressjs.com/pt-br/ ;  

* Nodemon: https://nodemon.io/ ;  

* Dotenv-safe: https://www.npmjs.com/package/dotenv-safe ;  

* Mongoose: https://mongoosejs.com/

---
Desenvolvido por [Clarissa Leal](https://www.linkedin.com/in/clarissa-leal/).  
Dezembro/2020