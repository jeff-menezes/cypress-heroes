class ListHeroesPage {

    selectorsList() {
        const selectors= {
            cardConfirmation: "[data-cy='hero-card']"
        }

        return selectors

    }

    validarListaDeHerois(heroes) {
        heroes.forEach((hero, index) => {
            // .eq(index) verifica o card na ordem exata da página
        cy.get(this.selectorsList().cardConfirmation).eq(index).should('contain', hero)
        })
    }

}

export default ListHeroesPage