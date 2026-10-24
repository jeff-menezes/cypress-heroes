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
            //delete hero
            heroNameLocalization: '[data-cy="name"]',
            locationParents: '[data-cy="hero-card"]',
            trashButton: '[data-cy="trash"]',
            trashBoxOpen: ".leading-6",
            yesConfirmButton: ".justify-end button",

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

    deleteHero(confirName, deleteTextConfirm, deleteButtonText) {
        cy.contains(this.selectorsList().heroNameLocalization, confirName).parents(this.selectorsList().locationParents).within(() => {
          cy.get('img.rounded-full').should('be.visible').and('have.attr', 'src').and('contain', '/avatar');
          cy.get(this.selectorsList().heroNameLocalization).should('have.text', confirName);
          cy.get(this.selectorsList().trashButton).should('be.visible').click();
      });
         
        cy.contains(this.selectorsList().trashBoxOpen, deleteTextConfirm).should('be.visible')
        cy.get(this.selectorsList().yesConfirmButton).contains(deleteButtonText).click()
        cy.contains(this.selectorsList().heroNameLocalization, confirName).should('not.exist')
    }
}

export default HeroCreatePage