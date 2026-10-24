import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import ListHeroesPage from '../pages/listHeroesPage.js'
import HeroCreatePage from '../pages/heroCreatePage.js'

const loginPage = new LoginPage()
const listHeroesPage = new ListHeroesPage()
const heroCreatePage = new HeroCreatePage()

describe('spec manage heroes', () => {
   
  it('create new hero', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccessAdm.userEmailAdm, userData.userFail.password)

    heroCreatePage.heroCreate("Avatar", "Bat-Hero", "50", "100", "150", "Invisibility", "cypress/images/bat-avatar.png", "Bat-Hero")
    
})

  it('delete new hero', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccessAdm.userEmailAdm, userData.userFail.password)

    heroCreatePage.deleteHero("Bat-Hero", "Delete Hero", "Yes")
  
  })

})

  
