describe('login', () => {
  // usuario 1
  EMAIL_1='nicolas.qa@4i.com.br'
  SENHA_1='estagio4i'
  //usuario 2
  EMAIL_2='kumabe.qa.estag@4i.com.br'
  SENHA_2='estagio4intelligence'

  it('criando massa de teste 1', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
    cy.get('[data-testid="email"]').type(`${EMAIL_1}`)
    cy.get('[data-testid="password"]').type(`${SENHA_1}`)

    cy.get('[data-testid="cadastrar"]').click({force: true})

    cy.get('.alert').contains('Cadastro realizado com sucesso')

    cy.get('h1').contains('Serverest Store')
  })

  it('criando massa de teste 2', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')

    cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
    cy.get('[data-testid="email"]').type(`${EMAIL_2}`)
    cy.get('[data-testid="password"]').type(`${SENHA_2}`)

    cy.get('[data-testid="cadastrar"]').click({force: true})

    cy.get('.alert').contains('Cadastro realizado com sucesso')

    cy.get('h1').contains('Serverest Store')
  })

  it('login com sucesso', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto email e senha corretos
    cy.get('[data-testid="email"]').type(`${EMAIL_1}`)
    cy.get('[data-testid="senha"]').type(`${SENHA_1}`)

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao sou redirecionado para a pagina de produtos
    cy.get('h1').contains('Serverest Store')
  })

  it('email em branco', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto senha sem email
    // cy.get('[data-testid="email"]').type(`${EMAIL_1}`)
    cy.get('[data-testid="senha"]').type(`${SENHA_1}`)

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Email é obrigatório"
    cy.get('.alert').contains('Email é obrigatório')
  })

  it('senha em branco', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto email sem senha
    cy.get('[data-testid="email"]').type(`${EMAIL_1}`)
    // cy.get('[data-testid="senha"]').type(`${SENHA_1}`)

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Password é obrigatório"
    cy.get('.alert').contains('Password é obrigatório')
  })

  it('email errado', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto email errado
    cy.get('[data-testid="email"]').type(`${EMAIL_2}`)
    cy.get('[data-testid="senha"]').type(`${SENHA_1}`)

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Email e/ou senha inválidos"
    cy.get('.alert').contains('Email e/ou senha inválidos')
  })

  it('senha errada', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto senha errada
    cy.get('[data-testid="email"]').type(`${EMAIL_1}`)
    cy.get('[data-testid="senha"]').type(`${SENHA_2}`)

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Email e/ou senha inválidos"
    cy.get('.alert').contains('Email e/ou senha inválidos')
  })
})