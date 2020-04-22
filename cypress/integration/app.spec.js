describe('App successful', () => {
    it('should test successful flow of the page', () => {
        // setup server to make api calls
        cy.server();

        // set up fixture
        cy.fixture('statistic').as('statisticRes');
        // set up api calls
        cy.route('GET', 'https://api.whereiscovid.info/countries.json', '@statisticRes').as('getStatistic');

        // visit page
        cy.visit('/');

        // header and map aren't exist while api call isn't finished
        cy.get('.header-wrapper').should('not.exist');
        cy.get('.main-wrapper').should('not.exist');

        // make api call
        cy.wait('@getStatistic').then(xhr => {
            // check successful result
            expect(xhr.status).to.equal(200);
            expect(xhr.response.body).to.have.length(1);
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
        cy.get('.marker').should('be.visible').and('have.length', 1).and('have.class', 'marker-xlarge');

        // check info box
        cy.get('.marker').click();
        // should be visible after click on marker
        cy.get('.info-box-wrapper').should('be.visible');
        cy.get('.info-box-wrapper>ul').children().should('have.length', 9);

        cy.get('.info-box-heading').should('contain', 'Ukraine');
        cy.get('.info-box-wrapper-flag').should('have.attr', 'src', 'none_flag');

        // should be visible after click outside marker or infobox
        cy.get('.main-wrapper').click(100, 100);
        cy.get('.info-box-wrapper').should('not.be.visible');
    });
});
