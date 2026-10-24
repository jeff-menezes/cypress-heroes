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

    heroCreate(avatarCheck, avatarName, price, fans, saves, power, image, confirName) {
        cy.get(this.selectorsList().newHeroButton).click()
        cy.get(this.selectorsList().heroPageCheck).contains(avatarCheck)
        cy.get(this.selectorsList().heroCreateName).type(avatarName)
        cy.get(this.selectorsList().heroCreatePrice).type(price)
        cy.get(this.selectorsList().heroCreateFans).type(fans)
        cy.get(this.selectorsList().heroCreateSaves).type(saves)
        cy.get(this.selectorsList().heroSelectorPower).select(power)
        cy.get(this.selectorsList().heroInputImage).selectFile(image);
        cy.get(this.selectorsList().heroCreateButton).click()
        cy.get(this.selectorsList().cardAvatars).contains(confirName)
    }
}

export default HeroCreatePage