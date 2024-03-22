describe('login', () => {
  it('criando massa de teste 1', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
    cy.get('[data-testid="email"]').type(Cypress.env('email_3'))
    cy.get('[data-testid="password"]').type(Cypress.env('senha_3'))

    cy.get('[data-testid="cadastrar"]').click({force: true})

    cy.get('.alert').contains('Cadastro realizado com sucesso')

    cy.get('h1').contains('Serverest Store')
  })

  it('criando massa de teste 2', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
    cy.get('[data-testid="email"]').type(Cypress.env('email_4'))
    cy.get('[data-testid="password"]').type(Cypress.env('senha_4'))

    cy.get('[data-testid="cadastrar"]').click({force: true})

    cy.get('.alert').contains('Cadastro realizado com sucesso')

    cy.get('h1').contains('Serverest Store')
  })

  it('login com sucesso', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto email e senha corretos
    cy.get('[data-testid="email"]').type(Cypress.env('email_3'))
    cy.get('[data-testid="senha"]').type(Cypress.env('senha_3'))

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao sou redirecionado para a pagina de produtos
    cy.get('h1').contains('Serverest Store')
  })

  it('email em branco', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto senha sem email
    // cy.get('[data-testid="email"]').type(Cypress.env('email_3'))
    cy.get('[data-testid="senha"]').type(Cypress.env('senha_3'))

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Email é obrigatório"
    cy.get('.alert').contains('Email é obrigatório')
  })

  it('senha em branco', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto email sem senha
    cy.get('[data-testid="email"]').type(Cypress.env('email_3'))
    // cy.get('[data-testid="senha"]').type(Cypress.env('senha_3'))

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Password é obrigatório"
    cy.get('.alert').contains('Password é obrigatório')
  })

  it('email errado', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto email errado
    cy.get('[data-testid="email"]').type(Cypress.env('email_4'))
    cy.get('[data-testid="senha"]').type(Cypress.env('senha_3'))

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Email e/ou senha inválidos"
    cy.get('.alert').contains('Email e/ou senha inválidos')
  })

  it('senha errada', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto senha errada
    cy.get('[data-testid="email"]').type(Cypress.env('email_3'))
    cy.get('[data-testid="senha"]').type(Cypress.env('senha_4'))

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Email e/ou senha inválidos"
    cy.get('.alert').contains('Email e/ou senha inválidos')
  })
})