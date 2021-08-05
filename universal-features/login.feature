Feature: Loging in
  In order to access app functionality
  As a user
  I want to be able to login to the system

  Scenario: successful login
    Given I have launched the app
    When I have entered a valid username and password
    Then I should be able to log in

  Scenario: failed login
    Given I have launched the app
    When I have entered an invalid username or password
    Then I should not be able to log in
