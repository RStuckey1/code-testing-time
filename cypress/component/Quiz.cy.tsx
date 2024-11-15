import Quiz from '../../client/src/components/Quiz'

describe('Quiz.cy.tsx', () => {
  it('component mounted', () => {
    cy.mount(<Quiz />)
  })
  it('quiz starts', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()
  })
  it('next question prompted', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()
    cy.get('button').contains('2').click()
  })

})