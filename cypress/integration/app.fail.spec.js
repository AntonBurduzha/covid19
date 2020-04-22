describe('App failed', () => {
    it('should test failed flow of the page', () => {
        // setup server to make api calls
        cy.server();

        // set up api calls
        cy.route({
            method: 'GET',
            url: 'https://api.whereiscovid.info/countries.json',
            response: [],
            status: 400,
        }).as('getStatistic');

        // visit page
        cy.visit('/');

        // header and map aren't exist while api call isn't finished
        cy.get('.header-wrapper').should('not.exist');
        cy.get('.main-wrapper').should('not.exist');

        // make api call
        cy.wait('@getStatistic').then(xhr => {
            // check successful result
            expect(xhr.status).to.equal(400);
            expect(xhr.response.body).to.have.length(0);
        });

        // check header
        cy.get('.header-wrapper').should('be.visible');
        cy.get('.header-wrapper').children().should('have.length', 2);
        cy.get('.header-title').should('contain', 'COVID-19 Status');
        cy.get('.header-wrapper').children().eq(1).should('contain', Cypress.moment().format('DD MMMM YYYY'));

        // check map existing
        cy.get('.main-wrapper').should('be.visible');
        cy.get('.main-wrapper').children().should('have.length', 1);

        // check markers
        cy.get('.marker').should('not.exist');
    });
});
