Feature:  Wikipedia exaple tests

  Background:
    Given User is in Wikipedia Home Page

  Scenario Outline: User can search by any tests and go to the specific information page
    When User searches by "<searchText>" text
    Then User is in "<url>" information page
    Examples:
    | searchText           | url                  |
    | Real Betis Balompié  | Real_Betis           | 
    | Giraldillo           | Giraldillo           |
    | Guadalquivir         | Guadalquivir         |

  Scenario: User can access to private area
    When User goes to login page
    When User fill in login form with valid information
    Then User is logged correctly

  Scenario: User try to access to private area with wrong user and password
    When User goes to login page
    When User fill in login form with no valid information    
    Then Login error message is displayed
