class HeroCreatePage {

    selectorsList() {
        const selectors = {
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

        }
        return selectors
    }

    heroCreate() {
        cy.get(this.selectorsList().newHeroButton).click()
        cy.get(this.selectorsList().heroPageCheck).contains('Avatar')
        cy.get(this.selectorsList().heroCreateName).type("Bat-Avatar")
        cy.get(this.selectorsList().heroCreatePrice).type("$30")
        cy.get(this.selectorsList().heroCreateFans).type("100")
        cy.get(this.selectorsList().heroCreateSaves).type("50")
        cy.get(this.selectorsList().heroSelectorPower).select('Invisibility')
        cy.get(this.selectorsList().heroInputImage).selectFile('cypress/images/bat-avatar.png');
        cy.get(this.selectorsList().heroCreateButton).click()
        cy.get(this.selectorsList().cardAvatars).contains("Bat-Avatar")
    }
}

export default HeroCratePage