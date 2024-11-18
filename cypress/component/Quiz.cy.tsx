import Quiz from '../../client/src/components/Quiz'

describe('Quiz.cy.tsx', () => {
  it('component mounted', () => {
    cy.mount(<Quiz />)
  })
  it('when I click the start button I am prompted a questioni', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()
  })
  it('when i answer a question i am prompted with a new question', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()
    cy.get('button').contains('2').click()
  })
  it('when i answer all the questions the quiz is over', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains("2").click()
    cy.get('button').contains("3").click()
    cy.get('button').contains("4").click()
    cy.get('button').contains("4").click()
    cy.get('button').contains("3").click()
    cy.get('button').contains("2").click()
    cy.get('button').contains("2").click()
    cy.get('button').contains("1").click()
    cy.get('button').contains("4").click()
    cy.contains('Quiz Completed')  
  })
  it('when the quiz is over the score is presented ', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains("Start").click()
    cy.get('button').contains("1").click()
    cy.get('button').contains("2").click()
    cy.get('button').contains("3").click()
    cy.get('button').contains("4").click()
    cy.get('button').contains("4").click()
    cy.get('button').contains("3").click()
    cy.get('button').contains("2").click()
    cy.get('button').contains("2").click()
    cy.get('button').contains("1").click()
    cy.get('button').contains("4").click()
    cy.get('.alert')
})
  it('when the quiz is over the score is presented ', () => {
    cy.mount(<Quiz />)
    cy.get('button').contains("Start").click()
    cy.get('button').contains("1").click()
    cy.get('button').contains("2").click()
    cy.get('button').contains("3").click()
    cy.get('button').contains("4").click()
    cy.get('button').contains("4").click()
    cy.get('button').contains("3").click()
    cy.get('button').contains("2").click()
    cy.get('button').contains("2").click()
    cy.get('button').contains("1").click()
    cy.get('button').contains("4").click()
    cy.get('button').contains("Take New Quiz").click()
  })
})