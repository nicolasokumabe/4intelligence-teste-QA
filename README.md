# Testes de QA - 4intelligence

Este repositório contém testes automatizados para QA da 4intelligence.

## Utilizando as Coleções no Postman

Na pasta `api/postman/collection`, você encontrará diversas coleções de testes para importar no Postman. Para utilizá-las, siga os passos abaixo:

1. Abra o Postman.
2. Clique no botão "Import" no canto superior esquerdo.
3. Selecione a opção "Import File" e navegue até a pasta `api/postman/collection`.
4. Selecione a coleção desejada e clique em "Open".

Agora você está pronto para executar os testes no Postman.

## Testes Automatizados com Cypress

Na pasta `web`, você encontrará os testes automatizados utilizando o framework Cypress. Siga os passos abaixo para utilizá-lo:

1. Abra o terminal e navegue até a pasta `web`.
2. Inicialize o projeto npm.
```markdown
npm init
```

4. Crie um arquivo de ambiente para armazenar suas credenciais.
```markdown
touch cypress.env.json 
```
5. No arquivo `cypress.env.json`, insira suas credenciais conforme o exemplo abaixo:
```json
{
  "_comment_1": "Massa de testes 1-cadastro.cy.js",
  "email_1": "email_que_preferir_1@4intelligence.com",
  "senha_1": "senhaQuePreferir1",
  "email_2": "email_que_preferir_2@4intelligence.com",
  "senha_2": "senhaQuePreferir2",
  
  "_comment_2": "Massa de testes 2-login.cy.js",
  "email_3": "email_que_preferir_3@4intelligence.com",
  "senha_3": "senhaQuePreferir3",
  "email_4": "email_que_preferir_4@4intelligence.com",
  "senha_4": "senhaQuePreferir4",
  
  "_comment_3": "Massa de testes 3-produtos.cy.js",
  "email_5": "email_que_preferir_5@4intelligence.com",
  "senha_5": "senhaQuePreferir5",
  
  "_comment_4": "Massa de testes 4-lista_de_compras.cy.js",
  "email_6": "email_que_preferir_6@4intelligence.com",
  "senha_6": "senhaQuePreferir6"
}
```

6. Execute o Cypress
```markdown
npx cypress open
```

## Pronto! Realize os testes Automatizados com Cypress e Postman 👊



