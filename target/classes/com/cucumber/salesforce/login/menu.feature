Feature: To check the top menu options in the sales force application.

In order to check the menu items
As a sales agent
In order to perform the actions correctly

@menu
Scenario Outline: Testing top menu
Given I logged in "<Browser>"
Then All tabs should be present
|hometab|
|leadtab|
When I click on "<HeaderLinks>"
Then "VerifyObject" element should be present

 Examples:
|Browser	|HeaderLinks	|VerifyObject		|
|Mozilla	|hometab		|share				|
|Mozilla	|leadtab		|reports			|
