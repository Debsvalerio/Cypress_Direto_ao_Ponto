beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#")
});

describe ('Transações', () => {
    it('Cadastrar uma entrada', () => {

        criarTransacao("Freela", 250)

        cy.get("tbody tr td.description").should("have.text","Freela" )
    }); 
        

    it('Cadastrar uma saída', () => {
        criarTransacao("Cinema", -49,90)

         cy.get("tbody tr td.description").should("have.text","Cinema" )
    })


    it('Excluir transação', () => {
        criarTransacao('Freela', 100)
        criarTransacao('Dividendos', 200)

       // cy.contains(".description", "Freela")
       //     .parent()
       //     .find('img').click()

        // Outra forma de fazer o comando anterior:
        
       cy.contains(".description", "Freela")
            .siblings()
            .children('img').click()

        cy.get('tbody tr').should("have.length", 1)
    });
});

function criarTransacao(descricao, valor) {
        cy.contains("Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2026-04-12")

        cy.contains('button', 'Salvar').click()

}