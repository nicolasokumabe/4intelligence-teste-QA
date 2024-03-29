describe('lista de compras', () => {
  const produto1 = 'Logitech MX Vertical'
  
    it('criando massa de teste 1', () => {
      cy.visit('https://front.serverest.dev/cadastrarusuarios')
  
      cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
      cy.get('[data-testid="email"]').type(Cypress.env('email_6'))
      cy.get('[data-testid="password"]').type(Cypress.env('senha_6'))
  
      cy.get('[data-testid="cadastrar"]').click({force: true})
  
      cy.get('.alert').contains('Cadastro realizado com sucesso')
  
      cy.get('h1').contains('Serverest Store')
    })

    it('colocando produto na lista de compras', () => {
      // Dado que me logo no site Serverest
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type(Cypress.env('email_6'))
      cy.get('[data-testid="senha"]').type(Cypress.env('senha_6'))
      cy.get('[data-testid="entrar"]').click({force: true})

      // E sou redirecionado para a pagina de produtos
      cy.url().should('eq', 'https://front.serverest.dev/home')
      cy.get('h1').contains('Serverest Store')

      // Quando procuro pelo produto 'Logitech MX Vertical'
      cy.get('[data-testid="pesquisar"]').type(`${produto1}`)
      cy.get('[data-testid="botaoPesquisar"]').click()
      cy.get(':nth-child(1) > .card-body').contains(`${produto1}`)

      // E clico em "Adicionar na lista"
      cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]')
      .click()

      // Entao devo ver meu produto na lista de compras
      cy.get('.card').contains(`${produto1}`)
    })

    it('aumentando a quantidade do mesmo produto', () => {
      // Dado que estou na lista de compras
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type(Cypress.env('email_6'))
      cy.get('[data-testid="senha"]').type(Cypress.env('senha_6'))
      cy.get('[data-testid="entrar"]').click({force: true})
      cy.url().should('eq', 'https://front.serverest.dev/home')
      cy.get('h1').contains('Serverest Store')
      cy.get('[data-testid="pesquisar"]').type(`${produto1}`)
      cy.get('[data-testid="botaoPesquisar"]').click()
      cy.get(':nth-child(1) > .card-body').contains(`${produto1}`)
      cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]')
      .click()
      cy.get('.card').contains(`${produto1}`)

      // Quando clico no sinal de positivo do produto
      cy.get('[data-testid="product-increase-quantity"]').click()

      // Entao a quantidade deve aumentar para 2
      cy.get(':nth-child(3) > p').should('have.text', '2')
    })

    it('diminuindo a quantidade do mesmo produto', () => {
      // Dado que estou na lista de compras
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type(Cypress.env('email_6'))
      cy.get('[data-testid="senha"]').type(Cypress.env('senha_6'))
      cy.get('[data-testid="entrar"]').click({force: true})
      cy.url().should('eq', 'https://front.serverest.dev/home')
      cy.get('h1').contains('Serverest Store')
      cy.get('[data-testid="pesquisar"]').type(`${produto1}`)
      cy.get('[data-testid="botaoPesquisar"]').click({force: true})
      cy.get(':nth-child(1) > .card-body').contains(`${produto1}`)
      cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]')
      .click({force: true})
      cy.get('.card').contains(`${produto1}`)

      // Quando clico 5 vezes no sinal de positivo do produto
      for (let i = 0; i < 4; i++) {
        cy.get('[data-testid="product-increase-quantity"]').click()
      }

      // E clico 2 vezes no sinal de negativo do produto
      for (let i = 0; i < 2; i++) {
        cy.get('[data-testid="product-decrease-quantity"]').click()
      }

      // Entao a quantidade deve ser 3
      cy.get(':nth-child(3) > p').should('have.text', '3')
    })

    it('limpando a lista', () => {
      // Dado que estou na lista de compras
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type(Cypress.env('email_6'))
      cy.get('[data-testid="senha"]').type(Cypress.env('senha_6'))
      cy.get('[data-testid="entrar"]').click({force: true})
      cy.url().should('eq', 'https://front.serverest.dev/home')
      cy.get('h1').contains('Serverest Store')
      cy.get('[data-testid="pesquisar"]').type(`${produto1}`)
      cy.get('[data-testid="botaoPesquisar"]').click()
      cy.get(':nth-child(1) > .card-body').contains(`${produto1}`)
      cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]')
      .click({force: true})
      cy.get('.card').contains(`${produto1}`)

      // Quando clico em "Limpar Lista"
      cy.get('[data-testid="limparLista"]').click({force: true})

      // Entao devo ver a mensagem "Seu carrinho está vazio"
      cy.get('[data-testid="shopping-cart-empty-message"]')
      .should('have.text', 'Seu carrinho está vazio')
    })

    it('adicionando ao carrinho', () => {
      // Dado que estou na lista de compras
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type(Cypress.env('email_6'))
      cy.get('[data-testid="senha"]').type(Cypress.env('senha_6'))
      cy.get('[data-testid="entrar"]').click({force: true})
      cy.url().should('eq', 'https://front.serverest.dev/home')
      cy.get('h1').contains('Serverest Store')
      cy.get('[data-testid="pesquisar"]').type(`${produto1}`)
      cy.get('[data-testid="botaoPesquisar"]').click()
      cy.get(':nth-child(1) > .card-body').contains(`${produto1}`)
      cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]')
      .click({force: true})
      cy.get('.card').contains(`${produto1}`)

      // Quando clico em "Adicionar no carrinho"
      cy.get('[data-testid="adicionar carrinho"]').click({force: true})

      // Entao devo ver a mensagem "Em construção aguarde"
      cy.get('h1').should('have.text', 'Em construção aguarde')

      // E devo ver uma imagem que não estah quebrada
      cy.get('.jumbotron > .imagem').then(($imagem) => {
        expect($imagem[0].naturalWidth).to.be.greaterThan(0)
      })
    })
})