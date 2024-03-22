describe('produtos', () => {
    it('criando massa de teste 1', () => {
      cy.visit('https://front.serverest.dev/cadastrarusuarios')
  
      cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
      cy.get('[data-testid="email"]').type(Cypress.env('email_5'))
      cy.get('[data-testid="password"]').type(Cypress.env('senha_5'))
  
      cy.get('[data-testid="cadastrar"]').click({force: true})
  
      cy.get('.alert').contains('Cadastro realizado com sucesso')
  
      cy.get('h1').contains('Serverest Store')
    })
  
    it('pesquisando produto com sucesso', () => {
      // Dado que me logo no site Serverest
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type(Cypress.env('email_5'))
      cy.get('[data-testid="senha"]').type(Cypress.env('senha_5'))
      cy.get('[data-testid="entrar"]').click({force: true})
  
      // Quando sou redirecionado para a pagina de produtos
      cy.url().should('eq', 'https://front.serverest.dev/home')
      cy.get('h1').contains('Serverest Store')

      // E realizo uma pesquisa de produto
      cy.get('[data-testid="pesquisar"]').type('Logitech MX Vertical')
      
      // E clico em pesquisar
      cy.get('[data-testid="botaoPesquisar"]').click()

      // Entao devo ver o prosuto que pesquisei
      cy.get(':nth-child(1) > .card-body').contains('Logitech MX Vertical')
    })
  })