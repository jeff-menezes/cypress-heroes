import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import ListHeroesPage from '../pages/listHeroesPage.js'


const loginPage = new LoginPage()
const listHeroesPage = new ListHeroesPage()

describe('template spec', () => {
  
  const selectorsList = {
    

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

  
  it('success login', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userEmail, userData.userSuccess.password)
  
  })

  it('unsuccess login', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.userEmail, userData.userFail.password)
    loginPage.loginFail('Invalid')
 
  })

  it('success login com listagem de heróis', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userEmail, userData.userSuccess.password)


    const heroes = [
      'The Smoker', 'Warp Speed', 'Cyonic', 'The Librarian', 
      'Mr Angular', 'Collect Call Paul', 'Fly Girl'
    ]

    listHeroesPage.validarListaDeHerois(heroes)

    })
  })

  xit('create new hero', () => {
    loginPage.accessLoginPage()
    // cy.get(selectorsList.formLoginButton).click()
    // cy.get(selectorsList.usernameField).type(userData.userSuccessAdm.userEmailAdm)
    // cy.get(selectorsList.passwordField).type(userData.userSuccessAdm.password)
    // cy.get(selectorsList.loginButton).click()
    // cy.get(selectorsList.newHeroButton).click()
    // cy.get(selectorsList.heroPageCheck).contains('Avatar')
    // cy.get(selectorsList.heroCreateName).type("Bat-Avatar")
    // cy.get(selectorsList.heroCreatePrice).type("$30")
    // cy.get(selectorsList.heroCreateFans).type("100")
    // cy.get(selectorsList.heroCreateSaves).type("50")
    // cy.get(selectorsList.heroSelectorPower).select('Invisibility')
    // cy.get(selectorsList.heroInputImage).selectFile('cypress/images/bat-avatar.png');
    // cy.get(selectorsList.heroCreateButton).click()
    // cy.get(selectorsList.cardAvatars).contains("Bat-Avatar")
})

  xit('delete new hero', () => {
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
    cy.contains(selectorsList.heroNameLocalization, 'Bat-Avatar').should('not.exist')

  })

 