import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginUser from '../../support/pages/loginPage'

Given("access to the login page with valid email and password", () => {
  loginUser.acessPage()
  loginUser.logWithValidUser()
})

Then("I have a successful login", () => {
  loginUser.validInitialPage()
})