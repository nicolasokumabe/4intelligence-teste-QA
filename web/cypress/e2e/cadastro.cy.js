describe('cadastro', () => {
  it('cadastro com sucesso', () => {
    // Dado que acesso a pagina de cadastro
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    // Quando submeto o meu cadastro completo
    cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
    cy.get('[data-testid="email"]').type('nicolas.k@4i.com.br')
    cy.get('[data-testid="password"]').type('estagio4i')

    // E clico no botão "cadastrar"
    cy.get('[data-testid="cadastrar"]').click({force: true})

    // Entao vejo um alerta dizendo que fui cadastrado com sucesso
    cy.get('.alert').contains('Cadastro realizado com sucesso')

    // E sou redirecionado para a pagina de produtos
    cy.get('h1').contains('Serverest Store')
  })

  it('nome em branco', () => {
    // Dado que acesso a pagina de cadastro
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    // Quando submeto o meu cadastro sem nome
    cy.get('[data-testid="email"]').type('teste@4i.com.br')
    cy.get('[data-testid="password"]').type('estagio4i')

    // E clico no botão "cadastrar"
    cy.get('[data-testid="cadastrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Nome é obrigatório"
    cy.get('.alert').contains('Nome é obrigatório')
  })

  it('email em branco', () => {
    // Dado que acesso a pagina de cadastro
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    // Quando submeto o meu cadastro sem nome
    cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
    cy.get('[data-testid="password"]').type('estagio4i')

    // E clico no botão "cadastrar"
    cy.get('[data-testid="cadastrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Email é obrigatório"
    cy.get('.alert').contains('Email é obrigatório')
  })

  it('senha em branco', () => {
    // Dado que acesso a pagina de cadastro
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    // Quando submeto o meu cadastro sem nome
    cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
    cy.get('[data-testid="email"]').type('pedro@4i.com.br')

    // E clico no botão "cadastrar"
    cy.get('[data-testid="cadastrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Password é obrigatório"
    cy.get('.alert').contains('Password é obrigatório')
  })
})