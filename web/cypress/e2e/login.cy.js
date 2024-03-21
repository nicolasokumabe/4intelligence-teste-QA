describe('login', () => {
const email1 = 'nicolas.qa@4i.com.br'
const senha1 = 'estagio4i'
const email2 = 'kumabe.qa.estag@4i.com.br'
const senha2 = 'estagio4intelligence'


  it('criando massa de teste 1', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
    cy.get('[data-testid="email"]').type(`${email1}`)
    cy.get('[data-testid="password"]').type(`${senha1}`)

    cy.get('[data-testid="cadastrar"]').click({force: true})

    cy.get('.alert').contains('Cadastro realizado com sucesso')

    cy.get('h1').contains('Serverest Store')
  })

  it('criando massa de teste 2', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
    cy.get('[data-testid="email"]').type(`${email2}`)
    cy.get('[data-testid="password"]').type(`${senha2}`)

    cy.get('[data-testid="cadastrar"]').click({force: true})

    cy.get('.alert').contains('Cadastro realizado com sucesso')

    cy.get('h1').contains('Serverest Store')
  })

  it('login com sucesso', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto email e senha corretos
    cy.get('[data-testid="email"]').type(`${email1}`)
    cy.get('[data-testid="senha"]').type(`${senha1}`)

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao sou redirecionado para a pagina de produtos
    cy.get('h1').contains('Serverest Store')
  })

  it('email em branco', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto senha sem email
    // cy.get('[data-testid="email"]').type(`${email1}`)
    cy.get('[data-testid="senha"]').type(`${senha1}`)

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Email é obrigatório"
    cy.get('.alert').contains('Email é obrigatório')
  })

  it('senha em branco', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto email sem senha
    cy.get('[data-testid="email"]').type(`${email1}`)
    // cy.get('[data-testid="senha"]').type(`${senha1}`)

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Password é obrigatório"
    cy.get('.alert').contains('Password é obrigatório')
  })

  it('email errado', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto email errado
    cy.get('[data-testid="email"]').type(`${email2}`)
    cy.get('[data-testid="senha"]').type(`${senha1}`)

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Email e/ou senha inválidos"
    cy.get('.alert').contains('Email e/ou senha inválidos')
  })

  it('senha errada', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto senha errada
    cy.get('[data-testid="email"]').type(`${email1}`)
    cy.get('[data-testid="senha"]').type(`${senha2}`)

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Email e/ou senha inválidos"
    cy.get('.alert').contains('Email e/ou senha inválidos')
  })
})