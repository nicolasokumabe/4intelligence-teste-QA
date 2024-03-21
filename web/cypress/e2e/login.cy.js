describe('login', () => {
  // it('criando massa de teste', () => {
  //   cy.visit('https://front.serverest.dev/cadastrarusuarios')

  //   cy.get('[data-testid="nome"]').type('Nicolas Kumabe')
  //   cy.get('[data-testid="email"]').type('nicolas.qa@4i.com.br')
  //   cy.get('[data-testid="password"]').type('estagio4i')

  //   cy.get('[data-testid="cadastrar"]').click({force: true})

  //   cy.get('.alert').contains('Cadastro realizado com sucesso')

  //   cy.get('h1').contains('Serverest Store')
  // })

  // it('login com sucesso', () => {
  //   // Dado que acesso a pagina de login
  //   cy.visit('https://front.serverest.dev/login')

  //   // Quando submeto email e senha corretos
  //   cy.get('[data-testid="email"]').type('nicolas.qa@4i.com.br')
  //   cy.get('[data-testid="senha"]').type('estagio4i')

  //   // E clico no botão "entrar"
  //   cy.get('[data-testid="entrar"]').click({force: true})

  //   // Entao sou redirecionado para a pagina de produtos
  //   cy.get('h1').contains('Serverest Store')
  // })

  // it('email em branco', () => {
  //   // Dado que acesso a pagina de login
  //   cy.visit('https://front.serverest.dev/login')

  //   // Quando submeto senha sem email
  //   // cy.get('[data-testid="email"]').type('nicolas.qa@4i.com.br')
  //   cy.get('[data-testid="senha"]').type('estagio4i')

  //   // E clico no botão "entrar"
  //   cy.get('[data-testid="entrar"]').click({force: true})

  //   // Entao vejo um alerta dizendo "Email é obrigatório"
  //   cy.get('.alert').contains('Email é obrigatório')
  // })

  it('senha em branco', () => {
    // Dado que acesso a pagina de login
    cy.visit('https://front.serverest.dev/login')

    // Quando submeto email sem senha
    cy.get('[data-testid="email"]').type('nicolas.qa@4i.com.br')
    // cy.get('[data-testid="senha"]').type('estagio4i')

    // E clico no botão "entrar"
    cy.get('[data-testid="entrar"]').click({force: true})

    // Entao vejo um alerta dizendo "Password é obrigatório"
    cy.get('.alert').contains('Password é obrigatório')
  })
})