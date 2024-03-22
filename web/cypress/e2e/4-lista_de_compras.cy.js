describe('lista de compras', () => {
  const email1 = 'nicolas.qa.estag@4int.com.br'
  const senha1 = 'estag4int'
  const produto1 = 'Logitech MX Vertical'
  
    // it('criando massa de teste 1', () => {
    //   cy.visit('https://front.serverest.dev/cadastrarusuarios')
  
    //   cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
    //   cy.get('[data-testid="email"]').type(`${email1}`)
    //   cy.get('[data-testid="password"]').type(`${senha1}`)
  
    //   cy.get('[data-testid="cadastrar"]').click({force: true})
  
    //   cy.get('.alert').contains('Cadastro realizado com sucesso')
  
    //   cy.get('h1').contains('Serverest Store')
    // })
  
    it('colocando produto na lista de compras', () => {
      // Dado que me logo no site Serverest
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type(`${email1}`)
      cy.get('[data-testid="senha"]').type(`${senha1}`)
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

    
  })