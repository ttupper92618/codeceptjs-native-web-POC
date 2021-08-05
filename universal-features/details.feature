Feature: Viewing product details
  In order to know if I want to buy something
  As a user
  I want to be able to see details of a product

  Scenario: Select a product
    Given I have logged in
    When I click on a product
    Then I should be able to see product details