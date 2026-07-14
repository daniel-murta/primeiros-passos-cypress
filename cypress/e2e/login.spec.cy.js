describe('login - sucess', () => {

  const selectorsList = {
    usernameField: "[name = 'username']",
    passwordField: "[name = 'password']",
    loginButton: '.oxd-button',
    topbarField: '.oxd-topbar-header-breadcrumb',
    alertField: '.oxd-alert-content'
  }

  it ('Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type ('Admin')
    cy.get(selectorsList.passwordField).type ('admin123')
    cy.get(selectorsList.loginButton).click ()
    cy.location ('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.topbarField).contains('Dashboard')

  })
  it ('login - fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type ('teste')
    cy.get(selectorsList.passwordField).type ('teste')
    cy.get(selectorsList.loginButton).click ()
    cy.get(selectorsList.alertField)

  })
})