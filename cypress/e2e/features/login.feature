Feature: Login Page 
    Feature Login page will work depending on the user credentials.
    Background: 
    Given that I am on the login page
Scenario: Success Login
    When A user enters valid username "standard_user"
    And enters valid password "secret_sauce"
    And clicks on login button
    Then I should be on the My Home  page

