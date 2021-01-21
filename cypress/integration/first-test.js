describe('app', () => {
  it('renders about content when About is clicked', () => {
    cy.visit('/')
    const aboutLink = cy.get('li:nth-child(3) > a')

    aboutLink.click()
    expect(cy.get('article')).toExist()
  })
})