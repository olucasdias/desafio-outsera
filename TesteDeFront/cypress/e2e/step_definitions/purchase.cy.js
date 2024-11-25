import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import PurchaseCheckout from '../../support/pages/checkoutPage'

When("add product to cart", () => {
  PurchaseCheckout.addProductToCart()
})

And("make purchase checkout", () => {
  PurchaseCheckout.checkoutDetails()
})


Then("I have a successful purchase", () => {
  PurchaseCheckout.validateSucessPurchase()
})