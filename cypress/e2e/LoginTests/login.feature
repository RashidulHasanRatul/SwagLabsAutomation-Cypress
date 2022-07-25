Feature: Login Feature
    User can login to the application
    
    Scenario: Login to the application
    Given I am on the login page
    When I enter valid username "standard_user" 
    And I enter valid password "secret_sauce"
    And I click on login button
    Then I should be logged in to the application
    """
