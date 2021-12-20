#Created by Opeyemi
Feature: Quidax App

    Testing the User journey on the Quidax app

    Scenario: A user should be able to login with valid details
    Given I am on the quidax site
    When I click on the sign in icon
    And I insert the Username
    And I insert the password
    And I click the sign in button
    Then I should see the authorization page
