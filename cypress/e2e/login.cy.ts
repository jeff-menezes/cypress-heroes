import userData from '../fixtures/userData.json'

describe('template spec', () => {
  
  const selectorsList = {
    formLoginButton: "nav",
    usernameField: "[data-cy='email']",
    passwordField: "[data-cy='password']",
    loginButton: "form button",

    newHeroButton: "[href='/heroes/new']",
    heroPageCheck: ".py-4",
    heroCreateName: '[data-cy="nameInput"]',
    heroCreatePrice: '[data-cy="priceInput"]',
    heroCreateFans: '[data-cy="fansInput"]',
    heroCreateSaves: '[data-cy="savesInput"]',
    heroSelectorPower: '[data-cy="powersSelect"]',
    heroInputImage: 'input[type="file"]',
    heroCreateButton: "form button",
    cardAvatars: "[data-cy='hero-card']",

    //delete hero

    heroNameLocalization: '[data-cy="name"]',
    locationParents: '[data-cy="hero-card"]',
    trashButton: '[data-cy="trash"]',
    trashBoxOpen: ".leading-6",
    yesConfirmButton: ".justify-end button",
    

  } 

  
  xit('success login', () => {
    cy.visit('/')
    cy.get(selectorsList.formLoginButton).click()
    cy.get(selectorsList.usernameField).type(userData.userSuccess.userEmail)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
  })

  xit('unsuccess login', () => {
    cy.visit('/')
    cy.get(selectorsList.formLoginButton).click()
    cy.get(selectorsList.usernameField).type(userData.userFail.userEmail)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(".text-red-500").contains('Invalid')
  })

  xit('success login com listagem de heróis', () => {
    cy.visit('/')
    cy.get(selectorsList.formLoginButton).click()
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
    cy.visit('/')
    cy.get(selectorsList.formLoginButton).click()
    cy.get(selectorsList.usernameField).type(userData.userSuccessAdm.userEmailAdm)
    cy.get(selectorsList.passwordField).type(userData.userSuccessAdm.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.newHeroButton).click()
    cy.get(selectorsList.heroPageCheck).contains('Avatar')
    cy.get(selectorsList.heroCreateName).type("Bat-Avatar")
    cy.get(selectorsList.heroCreatePrice).type("$30")
    cy.get(selectorsList.heroCreateFans).type("100")
    cy.get(selectorsList.heroCreateSaves).type("50")
    cy.get(selectorsList.heroSelectorPower).select('Invisibility')
    cy.get(selectorsList.heroInputImage).selectFile('cypress/images/bat-avatar.png');
    cy.get(selectorsList.heroCreateButton).click()
    cy.get(selectorsList.cardAvatars).contains("Bat-Avatar")
})

  it('delete new hero', () => {
    cy.visit('/')
    cy.get(selectorsList.formLoginButton).click()
    cy.get(selectorsList.usernameField).type(userData.userSuccessAdm.userEmailAdm)
    cy.get(selectorsList.passwordField).type(userData.userSuccessAdm.password)
    cy.get(selectorsList.loginButton).click()
    // cy.get(selectorsList.cardAvatars).contains("Bat-Avatar")
    cy.contains(selectorsList.heroNameLocalization, 'Bat-Avatar').parents(selectorsList.locationParents).within(() => {
          cy.get('img.rounded-full').should('be.visible').and('have.attr', 'src').and('contain', '/avatar');
          cy.get(selectorsList.heroNameLocalization).should('have.text', 'Bat-Avatar');
          cy.get(selectorsList.trashButton).should('be.visible').click();
      });
         
    cy.contains(selectorsList.trashBoxOpen, "Delete Hero").should('be.visible')
      cy.get(selectorsList.yesConfirmButton).contains('Yes').click()
      cy.contains(selectorsList.heroNameLocalization, 'Bat-Avatar').should('not.exist');

  });



})

 