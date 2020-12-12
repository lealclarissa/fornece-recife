# Quero só dar uma olhada!

Neste caso você só irá visualizar o projeto; que já está construído e salvo na nuvem. Não poderá fazer outras requisições ou modificações, atualizações, etc. 

Caso esta seja sua intenção, siga o passo a passo abaixo:

```bash
# Acesse o deploy da aplicação pelo Heroku:
https://api-projeto-livre.herokuapp.com/

# Neste link acima você deverá visualizar o index do projeto

# Após acessar o link escolha um GET da lista abaixo para testar. Vá até a barra de endereço e acrescente o endponint escolhido no final. Exemplo:
https://api-projeto-livre.herokuapp.com/suppliers

# O exemplo acima deve retornar todos os fornecedores cadastrados na API
```

## O que será possível visualizar?

| Verbo  | Endpoint         | Descrição                         |
| ------ | ---------------- | --------------------------------- |
| GET    | `/`              | Retorna o index         |
| GET    | `/suppliers`     | Retorna todos os fornecedores     |
| GET    | `/products`      | Retorna todos os produtos         |

### Observação

À medida que for criando as novas features eu atualizarei este passo a passo.