
describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })

    it('successfuylly loads', () => {
            cy.visit('http://localhost:3001')
    })
    it('start quiz', () => {
      cy.get('button').contains("Start").click()
    })
    it('complete question prompted with next question', () => {
        cy.get('button').contains("Start").click()
        cy.get('button').contains("1").click()
      })
  })


