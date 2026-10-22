import userData from '../fixtures/userData.json'

describe('template spec', () => {
  
  const selectorsList = {
    usernameField: "[data-cy='email']",
    passwordField: "[data-cy='password']",
    loginButton: "form button"
  } 

  const userData = {
    userSuccessAdm: {
      userEmailAdm: "admin@test.com",
      password: "test123"
    },
    userSuccess: {
      userEmail: "test@test.com",
      password: "test123"
    },
    userFail: {
      userEmail: "fail@test.com",
      password: "test123"
    }

  }
  
  xit('success login', () => {
    cy.visit('http://localhost:3000/')
    cy.get("nav").click()
    cy.get(selectorsList.usernameField).type(userData.userSuccess.userEmail)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
  })

xit('unsuccess login', () => {
    cy.visit('http://localhost:3000/')
    cy.get("nav").click()
    cy.get(selectorsList.usernameField).type(userData.userFail.userEmail)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(".text-red-500").contains('Invalid')
  })

  xit('success login com listagem de heróis', () => {
    cy.visit('http://localhost:3000/')
    cy.get("nav").click()
    cy.get(selectorsList.usernameField).type(userData.userSuccess.userEmail)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()

    const heroes = [
      'The Smoker', 'Warp Speed', 'Cyonic', 'The Librarian', 
      'Mr Angular', 'Collect Call Paul', 'Fly Girl'
    ]

    heroes.forEach((hero, index) => {
        // .eq(index) verifica o card na ordem exata da página
      cy.get("[data-cy='hero-card']").eq(index).should('contain', hero)
    })
  })

it('create new hero', () => {
    cy.visit('http://localhost:3000/')
    cy.get("nav").click()
    cy.get(selectorsList.usernameField).type(userData.userSuccessAdm.userEmailAdm)
    cy.get(selectorsList.passwordField).type(userData.userSuccessAdm.password)
    cy.get(selectorsList.loginButton).click()
    cy.get("[href='/heroes/new']").click()
})


})

 