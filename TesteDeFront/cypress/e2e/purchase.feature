@purchase
Feature: Purchase

    Scenario: Purchase of product
        Given access to the login page with valid email and password
        When add product to cart
        And make purchase checkout
        Then I have a successful purchase