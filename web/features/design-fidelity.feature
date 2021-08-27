Feature: Validating conformance to design
  In order to know if implementation matches product designs
  As a business
  I want to be able to compare screenshots with designs

  Scenario: Test Login Design Fidelity
    Given I have launched the app
    Then I should not see a visual difference between login and the login designs