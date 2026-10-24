import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import ListHeroesPage from '../pages/listHeroesPage.js'

const loginPage = new LoginPage()
const listHeroesPage = new ListHeroesPage()

describe('spec login', () => {
   
  it('success login', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userEmail, userData.userSuccess.password)
  
  })

  it('unsuccess login', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.userEmail, userData.userFail.password)
    loginPage.loginFail('Invalid')
 
  })

  it('success login with heroes list confirmation', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userEmail, userData.userSuccess.password)

    const heroes = [
      'The Smoker', 'Warp Speed', 'Cyonic', 'The Librarian', 
      'Mr Angular', 'Collect Call Paul', 'Fly Girl'
    ]

    listHeroesPage.validarListaDeHerois(heroes)

    })

})

  
