# Quero testar no meu computador, posso?

Neste caso você poderá testar todas as requisições, fazer modificações, atualizações, etc. Mas precisará fazer algumas instalações em sua máquina, caso ainda não as tenha.

Antes de começar é necessário/aconselhável possuir:

- [Git](https://git-scm.com/);
- [Node.js](https://nodejs.org/pt-br/);
- Programa para testar as requisições: utilizo o [Postman](https://www.postman.com/);
- Um editor de código: utilizo o [VSCode](https://code.visualstudio.com/);

---

## Instruções para utilização da API:

Faça um fork do projeto através do link (https://github.com/lealclarissa/api-projeto-livre/fork);

Clique no botão que tem escrito "Fork"

Acesse o seu repositório e aperte no botão verde no canto superior direito. Copie a URL. Deve ser algo como:
<https://github.com/seu_nome_de_usuario/api-projeto-livre.git>

Agora abra o seu terminal, já com o git funcionando. E baixe o projeto localmente com o comando:  
```$ git clone <https://github.com/seu_nome_de_usuario/api-projeto-livre.git>```

Acesse a pasta do projeto:  
```$ cd api-projeto-livre```

Crie uma branch e acesse ela para realizar suas modificações/contribuições:  
```$ git checkout -b feature/<nome_da_sua_branch>```

Instale as dependências necessárias à execução da API:  
```$ npm install```

Abra o projeto na sua IDE (no meu caso o VSCode):  
```$ code .```

Pronto, agora você tem o código e poderá fazer uso dele! 

> Para facilitar eu salvei exemplos de todas as requisições que fiz até o momento e testei no postman. Deixei disponível em: `<./postman/requests_example.json>`. Você poderá utilizar os exemplos ou criar os seus próprios. Os schemas das duas entidades estão na pasta: `<..src/models/>`

Após suas contribuições no projeto, caso queira, pode salvar e subir pro seu repositório remoto:  
```$ git add . ``` Isso adiciona todas as modificações num "pacotinho".

Depois:

```$ git commit -m "sua mensagem"``` Isso rotula o seu "pacotinho" identificando o que você fez e salvou no comando anterior.

Para subir o projeto no seu GitHub, basta executar o comando:  
```$ git push origin feature/<sua_branch>```

---

## O que será possível fazer?

| Verbo  | Endpoint         | Descrição                         |
| ------ | ---------------- | --------------------------------- |
| POST   | `/suppliers`     | Cadastrar um novo fornecedor       |
| POST   | `/products`      | Cadastrar um novo produto          |
| GET    | `/suppliers`     | Visualizar todos os fornecedores     |
| GET    | `/products`      | Visualizar todos os produtos         |
| PUT    | `/suppliers/:id` | Atualizar um fornecedor específico |
| PUT    | `/products/:id`  | Atualizar um produto específico    |
| DELETE | `/suppliers/:id` | Deletar um fornecedor específico   |
| DELETE | `/products/:id`  | Deletar um produto específico      |

---

## Observações:

* À medida em que eu for criando as novas features atualizarei este arquivo.
* No README.md eu fiz uma lista nas próximas features a ser implementadas, o que você acha de testar? 
* Fique à vontade para criar!

## Links úteis:

- Atualizar um fork: https://www.lambda3.com.br/2016/02/mantendo-um-fork-atualizado-no-github/

- Comandos úteis git: https://gist.github.com/leocomelli/2545add34e4fec21ec16